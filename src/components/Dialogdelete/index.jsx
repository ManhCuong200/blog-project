import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogPortal,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function Dialogdelete({ open, setOpen, blogTitle, handleDelete }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogContent
          className="
          fixed top-1/2 left-1/2 -translate-x-1/2
          sm:max-w-[500px] rounded-xl p-6 z-[9999]
        "
        >
          <DialogClose className="absolute right-4 top-4 opacity-70 hover:opacity-100">
            <X className="h-5 w-5" />
          </DialogClose>

          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-red-600">
              Confirm delete "{blogTitle}"
            </DialogTitle>

            <DialogDescription className="text-gray-600 mt-1">
              This action cannot be undone. Are you sure?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-4 flex gap-3 justify-end">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
