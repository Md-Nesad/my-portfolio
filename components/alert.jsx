import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo({ name, setname, message, setmessage }) {
  const onSubmit = () => {
    setname("");
    setmessage("");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="px-10 py-6 text-lg rounded-full bg-[#F59E18] hover:bg-[#127A88] transition dark:text-white">
          Let's talk
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Hello {name}. Welcome to my Portfolio.
          </AlertDialogTitle>
          <AlertDialogDescription className="dark:text-white">
            Message: {message}. <br /> <br />
            Thank you for try to cantact with me. Please connect and contact
            with me via below social media platform to enhance your business and
            services.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={onSubmit}
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
