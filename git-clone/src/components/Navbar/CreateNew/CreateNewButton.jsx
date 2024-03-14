import React from "react";

import { ActionMenu, ActionList } from "@primer/react";

const CreateNew = () => {
  return (
    <>
      <ActionMenu>
        <ActionMenu.Button>+</ActionMenu.Button>
        <ActionMenu.Overlay width="medium">
          <ActionList>
            <ActionList.Item onSelect={() => alert("Copy link clicked")}>
              New Repository
            </ActionList.Item>
            <ActionList.Item onSelect={() => alert("Quote reply clicked")}>
              Import Repository
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item onSelect={() => alert("Edit comment clicked")}>
              New Codespace
            </ActionList.Item>
            <ActionList.Item onSelect={() => alert("Edit comment clicked")}>
              New Gist
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item onSelect={() => alert("Edit comment clicked")}>
              New organization
            </ActionList.Item>
            <ActionList.Item onSelect={() => alert("Edit comment clicked")}>
              New Project
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item
              variant="danger"
              onSelect={() => alert("Delete file clicked")}
            >
              Delete file
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>
  );
};

export default CreateNew;
