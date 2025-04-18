import Card from "./Card";

function GaleryFlex() {
  return (
    <div className="flex flex-col justify gap-3 items-center ">
      <div className="flex flex-row gap-3 w-full justify-center">
        <div className="flex flex-col gap-3 ">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/2663/5814/673d32d2c679a5aec4b97dad88d6b2dd?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lGi1QDIhYBFD9kgi7vPVbRGuw5CVWyUHXFkFb5tgEU0Hu9hxAyTVJwc628ZIezZ3NG3BQdTlIkxRKtggR8kBeAO2nAc5El9E-3gTxw3T7KQjKarbiagnhB5THnioOeCRPTTKBhab7jy5HU346MNj~QCXc2cqKBNJjHEJpgs8ZVQjTFGksVoYaGhigip0sX9phAGu7l4RWpGA6DuJwLgSFDeWIfnsPj6lk5Qn2KsK9b271vw-fv9BjtuYSWALaeIy~LsOlxkBtEVua8mAYSxcWl8RKt4vq283KGKuNzodibWUHbjZ-~NhwT0gu4jRpyVjficoTjWSqTm1X4g~v6oPCg__"
            width="w-40 lg:w-[600px]"
            height="h-40 lg:h-[644px]"
          />
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/5105/31de/cd37166db4c73bcb7c9faba81997ed11?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tOHJvIiXQap26bv~~ScSfLDGr3Yh2MrNNGrN-3hLrSUVkSdl1CwQzPBCg2lu6pYokMz~9X4rEmaW7dvR8~Ur5b9XpZInIxjWWmpa-jWFxZMPg-5DpdATRy4-iIUuePy0NgWnw4r4pACNpiRWyDFubxjVr3eZBzH~4ZDgOTiIEbFxyrHR~Q7048~xrKeaLKZVGAIPr7GVf-HoZyERez2SxIfiDrl2a0qtpt4cpo6-KhzWI6Tb2DBH7RIDLN1EaXQ8S5lsMdak22w4Nw1UNOfUZwdoYVZoLvLbJKWoQFaLjwxO~fIvpmYWoq8ypA0rXpEhw57o5ZnOkACU4-p6ZjLkdw__"
            width="w-40 lg:w-[600px]"
            height="h-40 lg:h-[562px]"
          />
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/6155/57c4/168061b0745abf460d10965b7b5b1619?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AQtl~6ey1LE6xopJwa7-YstAKwMeGRHElcpzYnuWslzFlgoA5lgb543ZwHScblQ7~vYmU9MU6X7pP9aK4Hwb~a9lNwBBN~Rvn-ojfgKC3~OEX6CydJtQ~4OV5k7fCAHQGy~6Wcf-23L6jTZpFNQ1qJ0yImVUREmOtVvBW6NS65BBbtSMLDBqOI2Z2-tqrUd~uFfoJ~6WSEgleha7u54Rclgbou-dp~cCkY8JmAizBPxC2uk45k1wXWO79L5eQBmd0H7ymxxEuQAAc9XTlARcpM8iJ0JqtYLHW4RCmsAUp3DnXK7wWSz1aIiGljvNEDsTEPOQtJICH4gB7nU6uh6Btg__"
            width="w-40 lg:w-[600px]"
            height="h-45 lg:h-64"
          />
        </div>
        <div className="flex flex-col h-auto gap-3">
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/40ce/d985/6ae446cb50612a0eea2e3a70297595b3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=deIoy6wBG8CE6oOJwsUMD4MBmbuBNuqNYBjvrPEkZbzeUOi8bL052E3SVXDSjCclRgxtQeX8UIJNdXpnxoQyPpPm2ZXIuzj8jTuWoIqTduzwR7RaDgF0Y6qwHhhc~mNPmBFZB~Vs9tDedI1dtOe6Y5-DnDflnXHYSEd81rovQxAFR~bREU3xZPreHDMbHlTuLZ2Tcs7tqsSStMmAJ~K1IL1W2-vXz~bStUPwj~UKfT9mPQnSsa~l3yts3MiCGO~EUNYCCzG4lce4OjktgkIVJGo~Yw-ER2AQES8V9RPedQ2apv49ZI~L1eQkamYKzrCLMjpIaHbNiVGSkYFa9j544g__"
            height="h-full lg:h-[832px]"
            width="w-44 lg:w-[660px]"
          />
          <Card
            imageSrc="https://s3-alpha-sig.figma.com/img/8ad8/6c6b/05a776cfc1cfe605002cacf19cb10a5d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qWfIJd1kyswltztAPMkUdhsKIaTSVL3WADjvkPuk9uJx0-VmukatxjYLX5GcQ~FxUkOb-TCgDgYKt1jvpomAoFOJh8Vnhi6nR4zYQJsA9oDbZ~CNut8hRysQhSAapAoe8ii-tsqd4Ltovlranh5DwTUkD~53glcPTYMo9UEvVUeMG8~F6ajVGXgdHM2rWWgoqpFtUBSHJuLsawhsbUAVzpnox2jPL~t0WIN~5tLS8oXaEIsDUJuxEeb~XOBcw83LZMctEPaQW4TuZOq47xZgcDPmM0zkFtn8BHIlQ6gtT3ZZn9Pz0P5OU~ILzYC2m9pttLaf9ZJ48i~CNvpS9oD9EA__"
            height="h-62 lg:h-[659px]"
            width="w-44 lg:w-[660px] "
          />
        </div>
      </div>
      <Card
        imageSrc="https://s3-alpha-sig.figma.com/img/297d/1197/42808caf84d34f8b95252c5ae5393bb7?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e1QTnjhMVuC96YX0-p9~OtxeNrKHcvddeNVzGwyWGnIeLNsK9WQZf6HODBwvIBGwKLrsiwMRpIFyqh6DDQJYKZaWhYC94naGoFjvVGoAE93aSjLy6BxdmbErVtBfhm6CnGnSuBhgwBvpkXeu19ICPv7Cp7sYeruq~hl7HT~GHQjHt7e9SaEckjJQaebsEbT3kEKCdQjGGzqBybP~QUKRbEV8gb5mcCK6PupZgWYamohl2wJyz-rsiy7Q10jbogNC8Y9egtuFR0xQIzqThkCl9s7lO4GZdv-ABdHcuop-lN9ni5d2PY-GP-lBgGmdd38ZwfXgRp1sEXGFbNleYFUshg__"
        width="w-full lg:w-[1000px]"
        height="h-28 lg:h-90"
      />
    </div>
  );
}

export default GaleryFlex;
