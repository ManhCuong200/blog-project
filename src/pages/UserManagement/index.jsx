import React, { useState, useEffect } from "react";
import Usermanagement from "@/components/Usermanagement";
import { getAllUser, deleteUser, changeUserRole } from "@/services/api/users";
import { Dialogdelete } from "@/components/Dialogdelete";
import { DialogChangeRole } from "@/components/DialogChangeRole";

const UserManagement = () => {
  const [listUsers, setListUsers] = useState([]);
  const [usersID, setUsersID] = useState(null); 
  const [openDelete, setOpenDelete] = useState(false);
  const [openRoleDialog, setOpenRoleDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentRole, setCurrentRole] = useState("user");

  const handleOpenRoleDialog = (user) => {
    setSelectedUserId(user._id);
    setCurrentRole(user.role);
    setOpenRoleDialog(true);
  };

  const handleSaveRole = async () => {
    try {
      await changeUserRole(selectedUserId, currentRole);
      setListUsers((prev) =>
        prev.map((user) =>
          user._id === selectedUserId ? { ...user, role: currentRole } : user
        )
      );
      setOpenRoleDialog(false);
    } catch (err) {
      console.error("Lỗi khi thay đổi role:", err);
    }
  };

  const handleOpenDelete = (id) => {
    setUsersID(id);
    setOpenDelete(true);
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(usersID);
      setListUsers((prev) => prev.filter((user) => user._id !== usersID));
      setOpenDelete(false);
    } catch (err) {
      console.error("Lỗi khi xóa user:", err);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUser();
        const items = Array.isArray(data.items) ? data.items : [];
        setListUsers(items);
      } catch (err) {
        console.error("Lỗi khi tải user:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Usermanagement
        listUsers={listUsers}
        handleOpenDelete={handleOpenDelete}
        handleOpenRoleDialog={handleOpenRoleDialog}
      />

      <Dialogdelete
        open={openDelete}
        setOpen={setOpenDelete}
        title="Delete User?"
        description="Are you sure you want to remove this user?"
        onConfirm={handleDeleteUser}
      />
      <DialogChangeRole
        open={openRoleDialog}
        setOpen={setOpenRoleDialog}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        onSave={handleSaveRole}
      />
    </>
  );
};

export default UserManagement;
