type Props = {
  imgs?: string[];
};

export default function ReveillonGallery({ imgs }: Props) {
  const [a = '', b = '', c = '', d = ''] = imgs || [];

  return (
    <div className="w-full flex justify-center px-6 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-[1100px] w-full">
        <div className="sm:col-span-1 flex items-start">
          <img src={a} alt="gallery-1" className="rounded-xl w-full object-cover" style={{ height: 160 }} />
        </div>
        <div className="sm:col-span-1 flex items-center justify-center">
          <img src={b} alt="gallery-2" className="rounded-xl w-full object-cover" style={{ height: 120 }} />
        </div>
        <div className="sm:col-span-2 flex items-start">
          <img src={c} alt="gallery-3" className="rounded-xl w-full object-cover" style={{ height: 360 }} />
        </div>

        <div className="sm:col-span-2">
          <img src={d} alt="gallery-4" className="rounded-xl w-full object-cover" style={{ height: 260 }} />
        </div>
        <div className="sm:col-span-2" />
      </div>
    </div>
  );
}
