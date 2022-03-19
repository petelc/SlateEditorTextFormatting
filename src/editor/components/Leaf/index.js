const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.fontStyle) {
    children = <leaf.fontStyle>{children}</leaf.fontStyle>;
  }

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.strike) {
    children = <s>{children}</s>;
  }

  return <span {...attributes}>{children}</span>;
};

export default Leaf;
