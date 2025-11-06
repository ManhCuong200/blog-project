import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center mt-10 mb-8">
      <h1 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
        Your own <span className="text-[#5044E5]">blogging</span>
        <br />
        platform.
      </h1>

      <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it's one word or a thousand, your story
        starts right here.
      </p>

      <form className="flex bg-card justify-between items-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded overflow-hidden">
        <input
          placeholder="Enter search title..."
          className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-base md:text-sm"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 bg-[#5044E5] text-white px-8 py-2 m-1.5 rounded transition-all cursor-pointer hover:bg-[#5044E5]/90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default HeroSection;
