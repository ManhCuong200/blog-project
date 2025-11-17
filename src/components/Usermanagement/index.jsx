import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, KeyRound } from "lucide-react";

export default function Usermanagement({ listUsers, handleOpenDelete, handleOpenRoleDialog }) {
  return (
    <div className="px-4 mx-auto max-w-7xl pt-4 pb-20">
      <h2 className="text-4xl md:text-5xl font-semibold text-[#5044E5] text-center mt-10 mb-12">
        🧩 User Management
      </h2>

      <Table className="shadow-sm border rounded-xl">
        <TableHeader>
          <TableRow className="bg-gray-50 text-gray-700">
            <TableHead>USERNAME</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead className="text-center">ROLE</TableHead>
            <TableHead className="text-center w-[150px]">ACTION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {listUsers.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-center">{user.role}</TableCell>

              <TableCell className="flex justify-center gap-3 py-3">
                <Button
                  variant="destructive"
                  size="icon"
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => handleOpenDelete(user._id)}
                >
                  <Trash2 size={16} />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-[#5044E5] text-[#5044E5] cursor-pointer"
                  onClick={() => handleOpenRoleDialog(user)}
                >
                  <KeyRound size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
