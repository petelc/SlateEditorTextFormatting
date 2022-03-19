import { useSlate } from "slate-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faImage,
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough
} from "@fortawesome/free-solid-svg-icons";

import {
  toggleFormatting,
  getMark,
  toggleFontStyle
} from "../../utils/formatting";
import { insertImage } from "../../utils/image";
import { insertLink } from "../../utils/link";

import "./styles.css";
import clsx from "clsx";

const fontStyles = [
  { value: "", name: "Body" },
  { value: "h1", name: "Heading 1" },
  { value: "h2", name: "Heading 2" },
  { value: "h3", name: "Heading 3" },
  { value: "h4", name: "Heading 4" },
  { value: "h5", name: "Heading 5" },
  { value: "h6", name: "Heading 6" }
];

const Toolbar = () => {
  const editor = useSlate();

  const isActive = (format) => !!getMark(editor, format);

  const handleFontStyle = (e) => {
    const value = e.target.value;
    toggleFontStyle(editor, value);
  };

  const handleFormatting = (format) => (e) => {
    e.preventDefault();
    toggleFormatting(editor, format);
  };

  const handleInsertImage = () => {
    const url = prompt("Enter an Image URL");
    insertImage(editor, url);
  };

  const handleInsertLink = () => {
    const url = prompt("Enter a URL");
    insertLink(editor, url);
  };

  return (
    <div className="toolbar">
      <select
        onChange={handleFontStyle}
        value={getMark(editor, "fontStyle") || ""}
      >
        {fontStyles.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
      <button
        className={clsx({ active: isActive("bold") })}
        onClick={handleFormatting("bold")}
        aria-label="Bold"
        title="Bold"
      >
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button
        className={clsx({ active: isActive("italic") })}
        onClick={handleFormatting("italic")}
        aria-label="Italic"
        title="Italic"
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button
        className={clsx({ active: isActive("underline") })}
        onClick={handleFormatting("underline")}
        aria-label="Underline"
        title="Underline"
      >
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      <button
        className={clsx({ active: isActive("strike") })}
        onClick={handleFormatting("strike")}
        aria-label="Strike Through"
        title="Strike Through"
      >
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>
      <button
        onClick={handleInsertImage}
        aria-label="Insert Image"
        title="Image"
      >
        <FontAwesomeIcon icon={faImage} />
      </button>
      <button onClick={handleInsertLink} aria-label="Insert Link" title="Link">
        <FontAwesomeIcon icon={faLink} />
      </button>
    </div>
  );
};

export default Toolbar;
