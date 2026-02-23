"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CameraDialogProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export default function CameraDialog({ isOpen, setIsOpen }: CameraDialogProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const startCamera = async () => {
      try {
        setIsLoading(true);
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        alert("Akses kamera ditolak");
        setIsOpen(false);
      }
    };

    startCamera();

    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      setIsLoading(true);
    };
  }, [isOpen, setIsOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Scan QR Code</DialogTitle>
        </DialogHeader>

        <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground animate-pulse">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p className="text-sm font-medium">Menyiapkan kamera...</p>
            </div>
          )}

          <video
            ref={videoRef}
            autoPlay
            playsInline
            onLoadedMetadata={() => setIsLoading(false)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Tutup Kamera
        </Button>
      </DialogContent>
    </Dialog>
  );
}
