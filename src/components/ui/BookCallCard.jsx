import React from 'react'
import Button from './Button'
import WrapperCard from './WrapperCard'
import Image from 'next/image'
export default function BookCallCard() {
  return (
    <section className="w-full md:py-20 bg-[var(--bg-main)] flex justify-center">
        <div className="w-full max-w-4xl px-6 md:px-1">
          <div className="relative rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-orange-400/40 via-orange-300/30 to-orange-500/40 p-8 md:p-10 lg:p-14 overflow-hidden shadow-md">
            {/* decorative shapes */}
            <div className="hidden md:block absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[200px] border-[10px] border-[var(--color-accent)] rounded-full opacity-40"></div>
            <div className="hidden md:block absolute -bottom-24 right-10 w-[300px] h-[200px] border-[8px] border-[var(--color-accent)] rounded-full opacity-30"></div>

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7 md:gap-10">
              {/* LEFT */}
              <div className="flex flex-col gap-4 sm:gap-6 max-w-lg">
                <span className="uppercase tracking-widest text-xs text-[var(--text-muted)] font-semibold">
                  Let’s build something great
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--text-primary)] leading-tight">
                  Ready to start <br /> your next project?
                </h1>

                <Button variant="dark">Get started</Button>
              </div>

              {/* RIGHT CARD */}
              <WrapperCard className="rounded-2xl w-full max-w-xs sm:max-w-sm lg:w-[300px]">
                <div className="flex flex-col items-center bg-[var(--bg-main)] rounded-xl p-2 sm:p-5 w-full">
                  <div className="flex items-center gap-2 text-[10px] font-semibold tracking-wider text-[var(--text-secondary)] mb-3">
                    AVAILABLE FOR PROJECT
                  </div>

                  <div className="flex items-center mb-3">
                    <Image
                      src="/images/logoIcon.png"
                      alt="Client"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />

                    <span className="mx-2 text-[var(--text-primary)]">+</span>

                    <div className="w-9 h-9 bg-[var(--text-primary)] text-[var(--inner-text)] rounded-full flex items-center justify-center text-xs">
                      You
                    </div>
                  </div>

                  <h2 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    Quick 15-minute call
                  </h2>

                  <p className="text-xs text-[var(--text-secondary)] mb-4 text-center">
                    Pick a time that works for you.
                  </p>

                  <Button className="w-full">Book a free call</Button>
                </div>
              </WrapperCard>
            </div>
          </div>
        </div>
      </section>
  )
}
