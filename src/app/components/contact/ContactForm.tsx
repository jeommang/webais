"use client";

import { useRef, useState, useTransition, useEffect } from "react";
import { submitInquiry } from "@/app/contact/actions";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, startTransition] = useTransition();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  // 모달 자동 닫기 (2초)
  useEffect(() => {
    if (!modalOpen) return;
    const t = setTimeout(() => setModalOpen(false), 2000);
    return () => clearTimeout(t);
  }, [modalOpen]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);

    startTransition(async () => {
      const res = await submitInquiry(fd);
      if (res?.ok) {
        setModalMsg("접수되었습니다. 빠르게 연락드릴게요!");
        setModalOpen(true);
        form.reset();
      } else {
        setModalMsg(res?.error || "잠시 후 다시 시도해 주세요.");
        setModalOpen(true);
      }
    });
  };

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-start">
          {/* LEFT: 슬로건 */}
          <div className="md:pt-2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
              Contact
            </h2>
            <p className="mt-6 text-2xl sm:text-3xl font-semibold">
              Achieve Your Goals with
            </p>
            <div className="mt-8 space-y-3 text-gray-800 text-lg leading-relaxed">
              <p>
                위베이스와 함께라면,
                <br />
                목표 달성은 시간 문제입니다.
              </p>
              <p>
                전문적이고 창의적인 전략으로
                <br />
                성공의 길을 함께 열어가겠습니다.
              </p>
            </div>
          </div>

          {/* RIGHT: 폼 */}
          <form ref={formRef} onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="company"
                placeholder="회사명 *"
                className="border rounded-xl px-4 py-3"
                required
              />
              <input
                name="name"
                placeholder="이름 *"
                className="border rounded-xl px-4 py-3"
                required
              />

              <input
                name="phone"
                placeholder="연락처 *"
                className="border rounded-xl px-4 py-3"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="이메일 *"
                className="border rounded-xl px-4 py-3"
                required
              />
            </div>

            <select
              name="service"
              className="border rounded-xl px-4 py-3"
              defaultValue=""
            >
              <option value="" disabled>
                관심 서비스 선택
              </option>
              <option value="sns">SNS 마케팅</option>
              <option value="influencer">인플루언서 마케팅</option>
              <option value="viral">카페 바이럴</option>
              <option value="keyword">키워드 광고</option>
              <option value="trial">체험단 마케팅</option>
              <option value="etc">기타/문의</option>
            </select>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="period"
                placeholder="기간* (예: 3개월)"
                className="border rounded-xl px-4 py-3"
                required
              />
              <input
                name="budget"
                placeholder="예산* (예: 500만원)"
                className="border rounded-xl px-4 py-3"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="문의 내용"
              className="border rounded-xl px-4 py-3 h-36"
            />

            <label className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" name="agree" className="mt-1" required />
              개인정보처리방침에 동의합니다. (필수)
            </label>

            <div>
              <button
                type="submit"
                disabled={pending}
                className="rounded-xl bg-black text-white px-6 py-3 disabled:opacity-50"
              >
                {pending ? "전송 중..." : "문의하기"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ 모달 */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[88%] max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <p className="text-center text-base">{modalMsg}</p>
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-xl bg-black text-white px-5 py-2"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
