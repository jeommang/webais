"use server";

import nodemailer from "nodemailer";

type Result = { ok: true } | { ok: false; error: string };

export async function submitInquiry(formData: FormData): Promise<Result> {
  try {
    const name = (formData.get("name") || "").toString().trim();
    const company = (formData.get("company") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const service = (formData.get("service") || "").toString().trim();
    const period = (formData.get("period") || "").toString().trim();
    const budget = (formData.get("budget") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    const agree = formData.get("agree") === "on";

    if (!name || !phone || !agree) {
      return { ok: false, error: "필수 항목을 입력해 주세요." };
    }

    // SMTP 트랜스포터 (네이버웍스 기준)
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // 예: "smtp.worksmobile.com"
      port,
      secure, // 465=true(SSL), 587/STARTTLS=false
      auth: {
        user: process.env.SMTP_USER, // 예: commerce@ringcross.com
        pass: process.env.SMTP_PASS, // 앱 비밀번호 권장
      },
    });

    const to = process.env.INQUIRY_TO || "commerce@ringcross.com";
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    const subject = "[WEBais] 새 상담 문의 접수";
    const html = `
      <h2>새 상담 문의가 접수되었습니다</h2>
      <ul>
        <li><b>회사명:</b> ${company || "-"}</li>
        <li><b>이름:</b> ${name}</li>
        <li><b>연락처:</b> ${phone}</li>
        <li><b>이메일:</b> ${email || "-"}</li>
        <li><b>관심 서비스:</b> ${service || "-"}</li>
        <li><b>기간:</b> ${period || "-"}</li>
        <li><b>예산:</b> ${budget || "-"}</li>
      </ul>
      <p><b>문의 내용</b></p>
      <pre style="white-space:break-spaces;">${message || "-"}</pre>
    `;

    await transporter.sendMail({
      from: `"WEBais 상담" <${from}>`,
      to,
      subject,
      html,
      replyTo: email || undefined,
    });

    return { ok: true };
  } catch (e) {
    console.error("메일 전송 실패:", e);
    return { ok: false, error: "메일 전송 중 오류가 발생했습니다." };
  }
}
