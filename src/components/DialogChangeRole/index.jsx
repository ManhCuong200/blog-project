import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { X } from "lucide-react";

export function DialogChangeRole({
  open,
  setOpen,
  currentRole,
  setCurrentRole,
  onSave,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg rounded-xl p-6">
        <DialogClose className="absolute right-4 top-4 opacity-70 hover:opacity-100 cursor-pointer">
          <X className="h-5 w-5" />
        </DialogClose>

        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Change User Role
          </DialogTitle>
          <DialogDescription>
            Select the new role for this user. This action will take effect immediately.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <label className="text-sm font-medium">Select Role</label>

          <Select value={currentRole} onValueChange={setCurrentRole}>
            <SelectTrigger className="mt-2 w-full cursor-pointer">
              <SelectValue placeholder="Choose role" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="mt-6 flex justify-end gap-3">
          <DialogClose asChild>
            <Button variant="outline cursor-pointer">Cancel</Button>
          </DialogClose>

          <Button onClick={onSave} className="bg-[#5044E5] text-white cursor-pointer">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
