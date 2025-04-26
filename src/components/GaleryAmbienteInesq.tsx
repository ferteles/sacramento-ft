import Card from "./Card";

function GaleryAmbienteInesq() {
  return (
    <div className="h-[1313px] flex flex-col gap-5 w-full p-0">
      <div className="flex lg:flex-row flex-col lg:items-end items-center justify-start w-full gap-10">
        <Card
          imageSrc="https://s3-alpha-sig.figma.com/img/098f/dd11/8256b0edd3df6ac19cbbe1a4abe6684e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I~c7KPRgjNgNf-hW5zNNwiQCoP2SNslUloRgAsxbDSTy2BM41kFbMJTysDAOabFkX-JNsDaAFXfbiWhtyH4ehnxIxb7Og0X2I5ETeYFyG74LHjJEZJL4MMaGfVIIIkocEdHRmL46AhjUETJUu7efg364MSPOPoBBOZhGR7G5FqUhSZ8iNMyHSkXKNob13u98ySDu0vlNGb7BiUZ9Lp4aLyGUZZWCpB-ySpejZ4dHIBuOilSoO3WTbZMg86jI8X0uK-7VBDGGstaZOSvmxoeN0YEVVV2j0B1FQFasZZadHUqoQR4rcXwi6R4PVXoUA-K6CyV2C6mnVxPGBaQKmc6ZzA__"
          width="lg:w-1/3 w-full"
          height="lg:h-[887px] h-[517px]"
        />
        <div className="flex gap-5 w-full lg:items-center justify-center lg:justify-start">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/01cb/1082/aacac5735b948f097326e2ee56c769df?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a-UhDB6m-cFLy9A-t5KbxD1h-frI-k60GNn9b3WGPGvnFlvIfKmBWpmIXXzDRUYO8KOU~Ot2amz9MwkMUU8jfqQPTeUR4zTomfFhEzfJmMVwjzT1GkIlvn-UtEcEhCQZdxCYhgzYLOw6VjkdY5E1h7TAKd0vsp67-Rf-sehgVdDZTUgIahP9TozCyiAlTbjEtoj8t3cfrvvME7bGo1-E9-N-qR8MW7RklUzvNB0EnKbeSdlz9uxX6LXjQ2WpvTvT9OFBHSlWlX1ikEVbGG1CRXmR0KPe4OdT2hRjjwoq1kENBbZdf-N6zVcpBa0FR9me5c9nsgQ1BFOPwMisQWmRVw__"
            width=" lg:w-2/4 w-52"
            height="lg:h-120 h-80"
          />
        </div>
      </div>

      <div className="flex lg:flex-col-reverse lg:items-end w-full items-center justify-center lg:-mt-124">
        <Card
          imageSrc="https://s3-alpha-sig.figma.com/img/aa97/a6c2/84a7c7f8149117204c49b70bfeb7f10c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IqHE7DeK780QD6I9NAnSL~RfzsTjsze-YPQYljxKic-qGde5uDvdN3WyfbLvvXSgysojkNwfsSQZAbm6TD5MGYwV-SP5EnnM~6MRqv65~ozWOX9V8lqCRqNT0g6rPZHmnRfgfwIDYGgkixZrQJrfgoxsOGMV7fdgRZV4uDfsYU1nGL0hADejHeaC7-hS~6huU-AoW7ULFWXqGqE2DF97Fl2naI2YL68XYnohmmMotm~UKM3XuD2v1Ys7Lh~GOubils69jyDdDX~lC2L7bqWJojmtj1gFBt9gG0tAOpm7DhrYVLFCuJy9w9GFvjZ0qcHB124~CvJGUKLQEtuc7jmnaw__"
          width="lg:w-1/3 w-full"
          height="lg:h-[768px]"
        />
      </div>
    </div>
  );
}

export default GaleryAmbienteInesq;
