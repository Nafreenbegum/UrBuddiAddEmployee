import { expect } from "@playwright/test";

export class LeaveManagementPage {
  constructor(page) {
    this.page = page;

    // 🔹 Navigation
    this.leaveManagement = page.locator(
      "//a[contains(@class,'remove-line-nav-item')]//p[text()='Leave Management']"
    );

    this.applyLeaveBtn = page.getByRole('button',{name:'Apply Leave'});

    // 🔹 Warning modal
    this.lopWarning = page.locator(".modal-heading");
    this.okBtn = page.getByRole('button', { name: /ok/i });

    // 🔹 Form
    this.applyLeaveForm = page.locator(".modal-heading");
    this.fromDate = page.getByPlaceholder("From");
    this.toDate = page.getByPlaceholder("To");
    this.lead = page.locator("[name='lead']");
    this.subject = page.locator("[name='subject']");
    this.reason = page.locator("[name='reason']");
    this.submitBtn = page.getByRole('button', { name: /submit/i });

    // 🔥 ADD THIS (next month button)
    this.nextMonthBtn = page.locator(
      "//button[contains(@class,'react-datepicker__navigation--next')]"
    );
  }

  async selectRequestType(type) {
    await this.page.getByRole('radio', { name: type }).check();
  }

  async applyLeave(data) {

    await this.leaveManagement.click();

    await this.applyLeaveBtn.click();

    await expect(this.lopWarning).toBeVisible();
    await this.okBtn.click();

    await expect(this.applyLeaveForm).toBeVisible();

    // =========================
    // 🔥 FROM DATE (with fallback)
    // =========================
    await this.fromDate.fill(data.from);

    // 👉 If not filled properly → go next month
    if ((await this.fromDate.inputValue()) !== data.from) {
      await this.fromDate.click();
      await this.nextMonthBtn.click();
      await this.fromDate.fill(data.from);
    }

    // =========================
    // 🔥 TO DATE (with fallback)
    // =========================
    await this.toDate.fill(data.to);

    if ((await this.toDate.inputValue()) !== data.to) {
      await this.toDate.click();
      await this.nextMonthBtn.click();
      await this.toDate.fill(data.to);
    }

    // 🔹 Keep your existing click (no change)
    await this.applyLeaveForm.click();
    await this.lead.click();

    await this.subject.fill(data.subject);
    await this.reason.fill(data.reason);

    await this.selectRequestType(data.requestType);

    await this.submitBtn.click();
  }
}