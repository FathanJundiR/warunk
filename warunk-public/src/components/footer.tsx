export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-gray-800 text-white text-sm py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8 max-w-[900px] ">
        <div className="flex flex-col gap-2 basis-1/3">
          <p>
            Warunk adalah e-commerce bagi seluruh kalangan. Memudahkan dalam
            jual-beli. Entah anda mau menjual pakaian, kendaraan, besi pagar
            tetangga bahkan batu bara yang anda keruk dari pulau sebelah.
            Kemudahan dan kebebasan adalah moto kami
          </p>
          <span>
            <b>Kantor Pusat:</b> Jl. Spontan Uhuy No.45 Jakarta Utara
          </span>
          <span>
            <b>Telepon:</b> (+62 21) 5669 4021
          </span>
          <span>
            <b>Email:</b> uhuy@warunk.com
          </span>
        </div>
        <div className="flex flex-col gap-1 basis-1/3">
          <h2 className="mb-2 text-lg">Informasi</h2>
          <hr className="border-1 mb-4" />
          <div className="flex justify-between border-b-[0.5] py-2">
            <span>Profile</span>
          </div>
          <div className="flex justify-between border-b-[0.5] py-2">
            <span>Alamat Agen</span>
          </div>
          <div className="flex justify-between border-b-[0.5] py-2">
            <span>Hubungi Kami</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 basis-1/3">
          <h1 className="mb-2 text-lg">Social Media</h1>
          <hr className="border-1 mb-4" />
          <span>
            ikuti Warunk e-commer dan dapatkan info produk terkini, event dan
            diskon.
          </span>
        </div>
      </div>
    </footer>
  );
}
