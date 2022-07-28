/**
 * https://aka.ms/typescript/1
 */

import React from "react";

interface TableProps {
  items: any[];
  renderItem: (item: any) => any;
}

export const Table = (props: TableProps) => {
  return null;
};

export const Component = () => {
  return (
    <Table
      items={[ { id: "1" } ]}
      renderItem={(item) => {
        return null;
      }}
    ></Table>
  );
};