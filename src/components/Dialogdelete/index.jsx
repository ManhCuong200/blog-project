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

export function Dialogdelete({
  open,
  setOpen,
  title = "Confirm Delete",
  description = "This action cannot be undone. Are you sure you want to delete?",
  confirmLabel = "Delete",
  onConfirm,
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogContent className="rounded-xl p-6">
          <DialogClose className="absolute right-4 top-4 opacity-70 hover:opacity-100 cursor-pointer">
            <X className="h-5 w-5" />
          </DialogClose>

          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-red-600">
              {title}
            </DialogTitle>

            <DialogDescription className="text-gray-600 mt-1">
              {description}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-4 flex gap-3 justify-end">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                onConfirm();       
                setOpen(false);    
              }}
            >
              {confirmLabel}
            </Button>

          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
