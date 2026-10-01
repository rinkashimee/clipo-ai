import { X } from 'lucide-react';

type DemoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function VideoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="demo-modal-backdrop" onClick={onClose}>
      <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="demo-modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        {/* <video className="demo-video" controls autoPlay>
          <source src="/demo-video.mp4" type="video/mp4" />
        </video> */}
        <iframe
          className="demo-video"
          src=""
          title="Clipo AI Demo"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
