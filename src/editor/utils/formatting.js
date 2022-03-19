import { Editor, Transforms } from "slate";
import { ReactEditor } from "slate-react";

export const getMark = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks && marks[format];
};

export const toggleFormatting = (editor, format) => {
  if (!editor.selection) return;

  const isActive = getMark(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
    ReactEditor.focus(editor);
    Transforms.select(editor, editor.selection);
  }
};

export const toggleFontStyle = (editor, fontStyle) => {
  if (!editor.selection) return;

  if (!!fontStyle) {
    Editor.addMark(editor, "fontStyle", fontStyle);
    ReactEditor.focus(editor);
    Transforms.select(editor, editor.selection);
  } else {
    Editor.removeMark(editor, "fontStyle");
  }
};
