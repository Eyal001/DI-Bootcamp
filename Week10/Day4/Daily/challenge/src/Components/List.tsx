interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={(item as any).id}>{renderItem(item)}</li>;
      })}
    </ul>
  );
};

export default List;
