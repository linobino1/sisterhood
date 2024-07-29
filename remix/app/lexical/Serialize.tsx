import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import {
  IS_BOLD,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_UNDERLINE,
  IS_CODE,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
} from "./RichTextNodeFormat";
import type { SerializedLexicalNode } from "./types";
import { Link } from "@remix-run/react";
import { cn } from "~/util/cn";
import LexicalContent from "./LexicalContent";
import { Media } from "@payload-types";
import Gutter from "~/components/Gutter";
import Heading from "~/components/Heading";

interface Props {
  nodes: SerializedLexicalNode[];
  disableGutter?: boolean;
}

export function Serialize({
  nodes,
  disableGutter = false,
}: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node.type === "text") {
          let text = (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
            />
          );
          if (
            typeof node.format === "number" ||
            typeof node.format === "bigint"
          ) {
            if (node.format & IS_BOLD) {
              text = <strong key={index}>{text}</strong>;
            }
            if (node.format & IS_ITALIC) {
              text = <em key={index}>{text}</em>;
            }
            if (node.format & IS_STRIKETHROUGH) {
              text = (
                <span key={index} className="line-through">
                  {text}
                </span>
              );
            }
            if (node.format & IS_UNDERLINE) {
              text = (
                <span key={index} className="underline">
                  {text}
                </span>
              );
            }
            if (node.format & IS_CODE) {
              text = <code key={index}>{text}</code>;
            }
            if (node.format & IS_SUBSCRIPT) {
              text = <sub key={index}>{text}</sub>;
            }
            if (node.format & IS_SUPERSCRIPT) {
              text = <sup key={index}>{text}</sup>;
            }
          }

          return text;
        }

        if (node == null) {
          return null;
        }

        // alignment
        let className = "";
        if (node.format === "center") {
          className = cn(className, "text-center");
        }
        if (node.format === "right") {
          className = cn(className, "text-right");
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (
          node: SerializedLexicalNode
        ): JSX.Element | null => {
          if (node.children == null) {
            return null;
          } else {
            if (node?.type === "list" && node?.listType === "check") {
              for (const item of node.children) {
                if (!item?.checked) {
                  item.checked = false;
                }
              }
              return Serialize({ nodes: node.children });
            } else {
              return Serialize({ nodes: node.children });
            }
          }
        };

        const serializedChildren = serializedChildrenFn(node);

        switch (node.type) {
          case "linebreak": {
            return <br key={index} />;
          }
          case "paragraph": {
            return (
              <Gutter disable={disableGutter} className={className} key={index}>
                <p className="my-3 max-w-[700px] leading-snug">
                  {serializedChildren}
                </p>
              </Gutter>
            );
          }
          case "heading": {
            return (
              <Gutter
                disable={disableGutter}
                key={index}
                className={cn(className, "group")}
              >
                <Heading level={node.tag.slice(1)} className="my-4">
                  {serializedChildren}
                </Heading>
              </Gutter>
            );
          }
          case "list": {
            type List = Extract<keyof JSX.IntrinsicElements, "ul" | "ol">;
            const Tag = node?.tag as List;
            return (
              <Gutter
                as={Tag}
                disable={disableGutter}
                key={index}
                className={node?.listType}
              >
                {serializedChildren}
              </Gutter>
            );
          }
          case "listitem": {
            if (node?.checked != null) {
              return (
                <li
                  key={index}
                  className={`component--list-item-checkbox ${
                    node.checked
                      ? "component--list-item-checkbox-checked"
                      : "component--list-item-checked-unchecked"
                  }`}
                  value={node?.value}
                  role="checkbox"
                  aria-checked={node.checked ? "true" : "false"}
                  tabIndex={-1}
                >
                  {serializedChildren}
                </li>
              );
            } else {
              return (
                <li key={index} value={node?.value}>
                  {serializedChildren}
                </li>
              );
            }
          }
          case "quote": {
            return (
              <blockquote className={className} key={index}>
                {serializedChildren}
              </blockquote>
            );
          }
          case "link": {
            const fields: {
              doc?: any;
              linkType?: "custom" | "internal";
              newTab?: boolean;
              url?: string;
              appendix?: string;
            } = node.fields;

            if (fields.linkType === "custom") {
              return (
                <Link
                  key={index}
                  to={fields.url + (fields.appendix || "")}
                  target={fields.newTab ? 'target="_blank"' : undefined}
                  rel="noopener noreferrer nofollow"
                  className="text-key-500 underline"
                >
                  {serializedChildren}
                </Link>
              );
            } else if (fields.linkType === "internal") {
              return (
                <Link
                  key={index}
                  to={fields.doc.value.url + (fields.appendix || "")}
                  target={fields.newTab ? "_blank" : undefined}
                  className="text-key-500 underline"
                  prefetch="intent"
                >
                  {serializedChildren}
                </Link>
              );
            }
          }
          case "inline-image": {
            // TODO: inline-images based on InlineImagePlugin
            return (
              <span key={index} style={{ fontStyle: "italic" }}>
                {" "}
                (An inline image will appear here! Honest!){" "}
              </span>
            );
          }

          case "block":
            switch (node.fields.blockType) {
              default:
                return (
                  <p key={index}>
                    unimplemented block type {node.fields.blockType}
                  </p>
                );
            }

          case "upload":
            const media = node.value;
            const caption = node.fields?.caption;
            const fullscreen = node.fields?.width === "fullscreen";
            const type = media?.mimeType.startsWith("image/")
              ? "image"
              : media?.mimeType === "video/mp4"
              ? "video"
              : null;
            return (
              <Gutter
                as="figure"
                key={index}
                disable={disableGutter || fullscreen}
                className={cn("relative mb-8 mt-8 sm:mb-12", {
                  "mt-8 sm:mt-16": fullscreen,
                  contents: fullscreen && type === "video",
                })}
              >
                {type === "video" ? (
                  <video
                    src={media.url}
                    controls={!fullscreen}
                    autoPlay={fullscreen}
                    loop={fullscreen}
                    muted={fullscreen}
                    playsInline={fullscreen}
                    className={cn("w-full", {
                      "max-w-[600px]": !fullscreen,
                      "fixed left-0 top-0 -z-10 h-screen w-screen object-cover":
                        fullscreen,
                    })}
                  />
                ) : type === "image" ? (
                  <img src={media.url} alt={media.alt} />
                ) : (
                  <p>invalid MIME type {media?.mimeType}</p>
                )}
                {caption && (
                  <figcaption
                    className={cn(
                      "text-trans-900 mt-1 text-base leading-snug max-sm:pr-[20%] sm:mt-2",
                      {
                        hidden: fullscreen && type === "video",
                      }
                    )}
                  >
                    <LexicalContent json={caption} disableGutter />
                  </figcaption>
                )}
              </Gutter>
            );

          default:
            return <p key={index}>unimplemented node type {node.type}</p>;
        }
      })}
    </Fragment>
  );
}
