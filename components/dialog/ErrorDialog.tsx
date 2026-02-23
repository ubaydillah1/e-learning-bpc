import BaseDialog from "./BaseDialog";
import { Button } from "../ui/button";

const ErrorDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <BaseDialog
      title="Terjadi Error"
      description="Silahkan refresh halaman ini"
      alt="Error Illustration"
      imagePath="/assets/illustrations/Illu 5.png"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      footer={
        <Button onClick={() => window.location.reload()}>
          Refresh Halaman
        </Button>
      }
    />
  );
};

export default ErrorDialog;
