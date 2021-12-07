/* eslint-disable react/prop-types */
import React from 'react';
import { spacing } from '@mongodb-js/compass-components';
import { compactBytes, compactNumber } from './format';
import { NamespaceItemCard } from './namespace-card';
import { ItemsGrid } from './items-grid';

type Database = {
  _id: string;
  name: string;
  status: string;
  statusError: string | null;
  collectionsStatus: string;
  collectionsStatusError: string | null;
  collection_count: number;
  document_count: number;
  storage_size: number;
  data_size: number;
  index_count: number;
  index_size: number;
  collectionsLength: number;
};

const DATABASE_CARD_WIDTH = spacing[6] * 4;

const DATABASE_CARD_HEIGHT = 154;

const DATABASE_CARD_LIST_HEIGHT = 118;

const DatabasesList: React.FunctionComponent<{
  databases: Database[];
  onDatabaseClick(id: string): void;
  onDeleteDatabaseClick?: (id: string) => void;
  onCreateDatabaseClick?: () => void;
}> = ({
  databases,
  onDatabaseClick,
  onCreateDatabaseClick,
  onDeleteDatabaseClick,
}) => {
  return (
    <ItemsGrid
      items={databases}
      itemType="database"
      itemGridWidth={DATABASE_CARD_WIDTH}
      itemGridHeight={DATABASE_CARD_HEIGHT}
      itemListHeight={DATABASE_CARD_LIST_HEIGHT}
      sortBy={[
        { name: 'name', label: 'Database Name' },
        { name: 'storage_size', label: 'Storage size' },
        { name: 'collectionsLength', label: 'Collections' },
        { name: 'index_count', label: 'Indexes' },
      ]}
      onItemClick={onDatabaseClick}
      onDeleteItemClick={onDeleteDatabaseClick}
      onCreateItemClick={onCreateDatabaseClick}
      renderItem={({
        item: db,
        onItemClick,
        onDeleteItemClick,
        viewType,
        ...props
      }) => {
        return (
          <NamespaceItemCard
            id={db._id}
            key={db._id}
            name={db.name}
            type="database"
            viewType={viewType}
            status={db.status}
            data={[
              {
                label: 'Storage size',
                value: compactBytes(db.storage_size),
                hint: `Uncompressed data size: ${compactBytes(db.data_size)}`,
              },
              {
                label: 'Collections',
                value: compactNumber(db.collectionsLength),
              },
              {
                label: 'Indexes',
                value: compactNumber(db.index_count),
              },
            ]}
            onItemClick={onItemClick}
            onItemDeleteClick={onDeleteItemClick}
            {...props}
          ></NamespaceItemCard>
        );
      }}
    ></ItemsGrid>
  );
};

export { DatabasesList };
