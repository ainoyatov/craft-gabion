// app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen px-4 py-8 space-y-10 text-center">
      {/* Header */}
      {/* <header className="flex justify-between items-center text-sm">
        <h1 className="text-4xl font-bold">
          <span className="text-gray-900">CRAFT</span> <span className="text-gray-500">| Gabion</span>
          <div className="text-xs mt-1">Earth Elements. Talent. Time.</div>
        </h1>
        <nav className="space-x-4 text-right">
          <a href="/services" className="hover:underline">Services</a>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <a href="/about-us" className="hover:underline">About Us</a>
          <a href="/contact-us" className="hover:underline">Contact Us</a>
        </nav>
      </header> */}

      {/* Hi Res Pano */}
      <div className="border rounded-lg py-10 text-lg font-medium">
        Hi Res Pic Pano
      </div>

      {/* Philosophy Section */}
      <p className="max-w-2xl mx-auto text-gray-700">
        Our philosophy is simple: Combine earth elements, experienced craftsmen with the right amount of time and you will produce quality gabions. Never compromise in these areas and you will be able to replicate great work consistently.
      </p>

      {/* Images */}
      <div className="flex justify-center gap-6">
        <div className="w-24 h-24 border rounded-lg flex items-center justify-center">Pic 1</div>
        <div className="w-24 h-24 border rounded-lg flex items-center justify-center">Pic 2</div>
        <div className="w-24 h-24 border rounded-lg flex items-center justify-center">Pic 3</div>
      </div>

      {/* Why Section */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Why CRAFT Gabion?</h2>
        <p className="text-sm italic">Idealistic. Independent. Innovative.</p>
        <p className="max-w-xl mx-auto mt-2 text-sm text-gray-700">
          Our decision to form a company and enter into an extremely competitive market in an uncertain economic environment was nothing less than an act of faith…based on our firm belief that we could deliver a differentiated product in a differentiated manner without diverging from the traditions of our craft.
        </p>
      </div>

      {/* Testimonials */}
      <div className="text-left max-w-xl mx-auto">
        <div className="flex items-start gap-2">
          <input type="checkbox" checked readOnly className="mt-1" />
          <div>
            <span className="font-semibold">Customer Testimonials:</span><br />
            <em>I DON’T HAVE ANY TESTIMONIALS YET<br />I CAN GET PEOPLE TO?</em>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-xl mx-auto text-left">
        <h3 className="text-center font-semibold text-lg mt-6 mb-2">Our Values</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-800">
          <li>We don’t cut corners. Everything is done as if it were our own home project.</li>
          <li>Our work is done respectfully and in an organized fashion.</li>
          <li>We bid jobs within 49-hours. Need the extra 1 hour.</li>
        </ol>
      </div>

      {/* Calendly */}
      <div className="text-center">
        <p className="mb-2">calendly.com/craftgabion</p>
        <div className="inline-block border rounded shadow">
          <img src="/calendly_placeholder.png" alt="Calendly Screenshot" className="w-72 h-auto" />
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-start gap-2 max-w-xl mx-auto">
        <input type="checkbox" checked readOnly className="mt-1" />
        <span>CTA Section:</span>
      </div>
    </div>
  );
}





// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
