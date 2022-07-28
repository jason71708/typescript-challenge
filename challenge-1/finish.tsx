import React from "react";

interface TableProps<T extends { id: string; }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const Table = <T extends { id: string; }>(props: TableProps<T>) => {
  return (
    <ul>
      {props.items.map(props.renderItem)}
    </ul>
  );
};

export const Component = () => {
  return (
    <Table
      items={[ { id: "1", number: 123 } ]}
      renderItem={(item) => {
        return (
          <li key={item.id}>{item.number}</li>
        );
      }}
    ></Table>
  );
};