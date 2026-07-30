# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddEmployee.spec.ts >> Add and Delete Employee
- Location: tests\AddEmployee.spec.ts:21:5

# Error details

```
Error: ENOENT: no such file or directory, stat 'D:\New folder\UrBuddiAddEmployee\testData\sample_employee_details_T001.xlsx'
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e4]:
    - link [ref=e5] [cursor=pointer]:
      - /url: /
      - img "logo" [ref=e6]
    - generic [ref=e7]:
      - button [ref=e8] [cursor=pointer]:
        - paragraph [ref=e12]: "3"
      - button [ref=e13] [cursor=pointer]:
        - link [ref=e14]:
          - /url: /profile
          - img "profile-pic" [ref=e15]
  - generic [ref=e16]:
    - generic [ref=e17]:
      - navigation [ref=e19]:
        - list [ref=e20]:
          - listitem [ref=e21] [cursor=pointer]
          - link [ref=e24] [cursor=pointer]:
            - /url: /
            - listitem [ref=e25]:
              - paragraph [ref=e30]: Dashboard
          - link [ref=e31] [cursor=pointer]:
            - /url: /allemployees
            - listitem [ref=e32]:
              - paragraph [ref=e37]: Employees
          - link [ref=e38] [cursor=pointer]:
            - /url: /leave_management
            - listitem [ref=e39]:
              - paragraph [ref=e43]: Leave Management
          - link [ref=e44] [cursor=pointer]:
            - /url: /salary
            - listitem [ref=e45]:
              - paragraph [ref=e49]: Salary Management
          - link [ref=e50] [cursor=pointer]:
            - /url: /payslip/os000034
            - listitem [ref=e51]:
              - paragraph [ref=e55]: Payslip
          - link [ref=e56] [cursor=pointer]:
            - /url: /resource_tracking
            - listitem [ref=e57]:
              - paragraph [ref=e62]: Resource Tracking
          - link [ref=e63] [cursor=pointer]:
            - /url: /reimbursement
            - listitem [ref=e64]:
              - paragraph [ref=e68]: Reimbursement
          - link [ref=e69] [cursor=pointer]:
            - /url: /expenditure
            - listitem [ref=e70]:
              - paragraph [ref=e74]: Expenditure
          - link [ref=e75] [cursor=pointer]:
            - /url: /email_templates
            - listitem [ref=e76]:
              - paragraph [ref=e81]: Email Templates
          - listitem [ref=e83] [cursor=pointer]:
            - paragraph [ref=e89]: HR
          - listitem [ref=e95] [cursor=pointer]:
            - paragraph [ref=e101]: Billing
        - separator [ref=e106]
        - list [ref=e107]:
          - link [ref=e108] [cursor=pointer]:
            - /url: /profile
            - listitem [ref=e109]:
              - paragraph [ref=e114]: Your Profile
          - link [ref=e115] [cursor=pointer]:
            - /url: /settings
            - listitem [ref=e116]:
              - paragraph [ref=e121]: Settings
          - listitem [ref=e122]:
            - paragraph [ref=e127]: Logout
        - generic [ref=e128]: v1.1.0
      - generic [ref=e129]:
        - generic [ref=e130]:
          - paragraph [ref=e131]: Employees
          - generic [ref=e132]:
            - button "Import Excel Sheet" [active] [ref=e133] [cursor=pointer]
            - button "Export Data" [ref=e135] [cursor=pointer]
            - button "Add Employee" [ref=e136] [cursor=pointer]
        - generic [ref=e137]:
          - list [ref=e138]:
            - listitem [ref=e139]:
              - button "Active" [ref=e140] [cursor=pointer]
            - listitem [ref=e141]:
              - button "Released" [ref=e142] [cursor=pointer]
          - generic [ref=e146]:
            - treegrid [ref=e147]:
              - generic [ref=e148]:
                - row [ref=e149]:
                  - columnheader "EMP ID" [ref=e150]:
                    - text:  
                    - generic:    
                  - columnheader "NAME" [ref=e152]:
                    - text:  
                    - generic: 
                  - columnheader [ref=e154]:
                    - generic [ref=e155]:
                      - checkbox [ref=e156]
                      - text: 
                    - text: 
                    - generic: 
                  - columnheader [ref=e157]:
                    - text:  
                    - generic: 
                  - columnheader [ref=e158]:
                    - text:  
                    - generic: 
                  - columnheader [ref=e159]:
                    - text:  
                    - generic: 
                - row [ref=e160]:
                  - gridcell [ref=e161]:
                    - textbox "EMP ID Filter Input" [ref=e162]
                    - button "Open Filter Menu" [ref=e164] [cursor=pointer]: 
                  - gridcell [ref=e165]:
                    - textbox "NAME Filter Input" [ref=e166]
                    - button "Open Filter Menu" [ref=e168] [cursor=pointer]: 
                  - gridcell [ref=e169]
                  - gridcell [ref=e170]
                  - gridcell [ref=e171]
                  - gridcell [ref=e172]
              - rowgroup [ref=e173]:
                - row [ref=e174]:
                  - columnheader "EMAIL" [ref=e175]:
                    - text:  
                    - generic: 
                  - columnheader "ROLE" [ref=e177]:
                    - text:  
                    - generic: 
                  - columnheader "LEAD" [ref=e179]:
                    - text:  
                    - generic: 
                - row [ref=e181]:
                  - gridcell [ref=e182]:
                    - textbox "EMAIL Filter Input" [ref=e183]
                    - button "Open Filter Menu" [ref=e185] [cursor=pointer]: 
                  - gridcell [ref=e186]:
                    - textbox "ROLE Filter Input" [ref=e187]
                    - button "Open Filter Menu" [ref=e189] [cursor=pointer]: 
                  - gridcell [ref=e190]:
                    - textbox "LEAD Filter Input" [ref=e191]
                    - button "Open Filter Menu" [ref=e193] [cursor=pointer]: 
              - rowgroup [ref=e194]:
                - row "Press SPACE to select this row." [ref=e195] [cursor=pointer]:
                  - gridcell "rfneib" [ref=e196]
                  - gridcell [ref=e197]:
                    - paragraph [ref=e198]: fnLarissa lnBecker
                  - gridcell [ref=e199]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e200]
                    - text: 
                  - gridcell [ref=e201]
                  - gridcell [ref=e204]
                  - gridcell [ref=e209]:
                    - img "Profile" [ref=e211]
                - row "Press SPACE to select this row." [ref=e212] [cursor=pointer]:
                  - gridcell "SGIOB" [ref=e213]
                  - gridcell [ref=e214]:
                    - paragraph [ref=e215]: Humqlx Krlpdr
                  - gridcell [ref=e216]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e217]
                    - text: 
                  - gridcell [ref=e218]
                  - gridcell [ref=e221]
                  - gridcell [ref=e226]:
                    - img "Profile" [ref=e228]
                - row "Press SPACE to select this row." [ref=e229] [cursor=pointer]:
                  - gridcell "spcsow" [ref=e230]
                  - gridcell [ref=e231]:
                    - paragraph [ref=e232]: fnCollin lnVeum
                  - gridcell [ref=e233]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e234]
                    - text: 
                  - gridcell [ref=e235]
                  - gridcell [ref=e238]
                  - gridcell [ref=e243]:
                    - img "Profile" [ref=e245]
                - row "Press SPACE to select this row." [ref=e246] [cursor=pointer]:
                  - gridcell "cvb" [ref=e247]
                  - gridcell [ref=e248]:
                    - paragraph [ref=e249]: Rtyu Asdf
                  - gridcell [ref=e250]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e251]
                    - text: 
                  - gridcell [ref=e252]
                  - gridcell [ref=e255]
                  - gridcell [ref=e260]:
                    - img "Profile" [ref=e262]
                - row "Press SPACE to select this row." [ref=e263] [cursor=pointer]:
                  - gridcell "FBG00" [ref=e264]
                  - gridcell [ref=e265]:
                    - paragraph [ref=e266]: Fykkpq Kgfemn
                  - gridcell [ref=e267]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e268]
                    - text: 
                  - gridcell [ref=e269]
                  - gridcell [ref=e272]
                  - gridcell [ref=e277]:
                    - img "Profile" [ref=e279]
                - row "Press SPACE to select this row." [ref=e280] [cursor=pointer]:
                  - gridcell "FSSRF" [ref=e281]
                  - gridcell [ref=e282]:
                    - paragraph [ref=e283]: Lnxuzz Llgqay
                  - gridcell [ref=e284]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e285]
                    - text: 
                  - gridcell [ref=e286]
                  - gridcell [ref=e289]
                  - gridcell [ref=e294]:
                    - img "Profile" [ref=e296]
                - row "Press SPACE to select this row." [ref=e297] [cursor=pointer]:
                  - gridcell "gjummo" [ref=e298]
                  - gridcell [ref=e299]:
                    - paragraph [ref=e300]: fnJeanne lnUllrich
                  - gridcell [ref=e301]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e302]
                    - text: 
                  - gridcell [ref=e303]
                  - gridcell [ref=e306]
                  - gridcell [ref=e311]:
                    - img "Profile" [ref=e313]
                - row "Press SPACE to select this row." [ref=e314] [cursor=pointer]:
                  - gridcell "lqbisl" [ref=e315]
                  - gridcell [ref=e316]:
                    - paragraph [ref=e317]: fnLavinia lnKlein
                  - gridcell [ref=e318]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e319]
                    - text: 
                  - gridcell [ref=e320]
                  - gridcell [ref=e323]
                  - gridcell [ref=e328]:
                    - img "Profile" [ref=e330]
                - row "Press SPACE to select this row." [ref=e331] [cursor=pointer]:
                  - gridcell "OSLEAD" [ref=e332]
                  - gridcell [ref=e333]:
                    - paragraph [ref=e334]: LEAD Test
                  - gridcell [ref=e335]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e336]
                    - text: 
                  - gridcell [ref=e337]
                  - gridcell [ref=e340]
                  - gridcell [ref=e345]:
                    - img "Profile" [ref=e347]
                - row "Press SPACE to select this row." [ref=e348] [cursor=pointer]:
                  - gridcell "otxrvd" [ref=e349]
                  - gridcell [ref=e350]:
                    - paragraph [ref=e351]: fnChristie lnSchaden
                  - gridcell [ref=e352]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e353]
                    - text: 
                  - gridcell [ref=e354]
                  - gridcell [ref=e357]
                  - gridcell [ref=e362]:
                    - img "Profile" [ref=e364]
                - row "Press SPACE to select this row." [ref=e365] [cursor=pointer]:
                  - gridcell "PHQDM" [ref=e366]
                  - gridcell [ref=e367]:
                    - paragraph [ref=e368]: Yrocco Ekxakk
                  - gridcell [ref=e369]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e370]
                    - text: 
                  - gridcell [ref=e371]
                  - gridcell [ref=e374]
                  - gridcell [ref=e379]:
                    - img "Profile" [ref=e381]
                - row "Press SPACE to select this row." [ref=e382] [cursor=pointer]:
                  - gridcell "XEA04" [ref=e383]
                  - gridcell [ref=e384]:
                    - paragraph [ref=e385]: Hxbysu Fdvdff
                  - gridcell [ref=e386]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e387]
                    - text: 
                  - gridcell [ref=e388]
                  - gridcell [ref=e391]
                  - gridcell [ref=e396]:
                    - img "Profile" [ref=e398]
                - row "Press SPACE to select this row." [ref=e399] [cursor=pointer]:
                  - gridcell "ats5er" [ref=e400]
                  - gridcell [ref=e401]:
                    - paragraph [ref=e402]: fnJerome lnKuhn
                  - gridcell [ref=e403]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e404]
                    - text: 
                  - gridcell [ref=e405]
                  - gridcell [ref=e408]
                  - gridcell [ref=e413]:
                    - img "Profile" [ref=e415]
                - row "Press SPACE to select this row." [ref=e416] [cursor=pointer]:
                  - gridcell "clk5hf" [ref=e417]
                  - gridcell [ref=e418]:
                    - paragraph [ref=e419]: fnPablo lnWalsh
                  - gridcell [ref=e420]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e421]
                    - text: 
                  - gridcell [ref=e422]
                  - gridcell [ref=e425]
                  - gridcell [ref=e430]:
                    - img "Profile" [ref=e432]
                - row "Press SPACE to select this row." [ref=e433] [cursor=pointer]:
                  - gridcell "alu6k6" [ref=e434]
                  - gridcell [ref=e435]:
                    - paragraph [ref=e436]: fnEvelyn lnMertz
                  - gridcell [ref=e437]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e438]
                    - text: 
                  - gridcell [ref=e439]
                  - gridcell [ref=e442]
                  - gridcell [ref=e447]:
                    - img "Profile" [ref=e449]
                - row "Press SPACE to select this row." [ref=e450] [cursor=pointer]:
                  - gridcell "OS0008" [ref=e451]
                  - gridcell [ref=e452]:
                    - paragraph [ref=e453]: Employee Employee
                  - gridcell [ref=e454]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e455]
                    - text: 
                  - gridcell [ref=e456]
                  - gridcell [ref=e459]
                  - gridcell [ref=e464]:
                    - img "Profile" [ref=e466]
                - row "Press SPACE to select this row." [ref=e467] [cursor=pointer]:
                  - gridcell "9d1yrk" [ref=e468]
                  - gridcell [ref=e469]:
                    - paragraph [ref=e470]: fnRaleigh lnDickens
                  - gridcell [ref=e471]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e472]
                    - text: 
                  - gridcell [ref=e473]
                  - gridcell [ref=e476]
                  - gridcell [ref=e481]:
                    - img "Profile" [ref=e483]
                - row "Press SPACE to select this row." [ref=e484] [cursor=pointer]:
                  - gridcell "OS012" [ref=e485]
                  - gridcell [ref=e486]:
                    - paragraph [ref=e487]: Dileep Gedela
                  - gridcell [ref=e488]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e489]
                    - text: 
                  - gridcell [ref=e490]
                  - gridcell [ref=e493]
                  - gridcell [ref=e498]:
                    - img "Profile" [ref=e500]
                - row "Press SPACE to select this row." [ref=e501] [cursor=pointer]:
                  - gridcell "HKO19" [ref=e502]
                  - gridcell [ref=e503]:
                    - paragraph [ref=e504]: Ydzdnc Jqrfbr
                  - gridcell [ref=e505]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e506]
                    - text: 
                  - gridcell [ref=e507]
                  - gridcell [ref=e510]
                  - gridcell [ref=e515]:
                    - img "Profile" [ref=e517]
                - row "Press SPACE to select this row." [ref=e518] [cursor=pointer]:
                  - gridcell "OS019" [ref=e519]
                  - gridcell [ref=e520]:
                    - paragraph [ref=e521]: Jilan Shaik
                  - gridcell [ref=e522]:
                    - checkbox "Press Space to toggle row selection (unchecked)" [ref=e523]
                    - text: 
                  - gridcell [ref=e524]
                  - gridcell [ref=e527]
                  - gridcell [ref=e532]:
                    - img "Profile" [ref=e534]
              - rowgroup [ref=e535]:
                - row "Press SPACE to select this row." [ref=e536] [cursor=pointer]:
                  - gridcell "rfneib@testmail.com" [ref=e537]
                  - gridcell "Admin" [ref=e538]
                  - gridcell "fnLeroy lnShields" [ref=e539]
                - row "Press SPACE to select this row." [ref=e540] [cursor=pointer]:
                  - gridcell "humq.krlp84@mail.com" [ref=e541]
                  - gridcell "Employee" [ref=e542]
                  - gridcell "Jos Buttler" [ref=e543]
                - row "Press SPACE to select this row." [ref=e544] [cursor=pointer]:
                  - gridcell "spcsow@testmail.com" [ref=e545]
                  - gridcell "Admin" [ref=e546]
                  - gridcell "Nikhil Pachipala" [ref=e547]
                - row "Press SPACE to select this row." [ref=e548] [cursor=pointer]:
                  - gridcell "cvbnl@gmail.com" [ref=e549]
                  - gridcell "Employee" [ref=e550]
                  - gridcell "fnEvelyn lnMertz" [ref=e551]
                - row "Press SPACE to select this row." [ref=e552] [cursor=pointer]:
                  - gridcell "fykk.kgfe45@mail.com" [ref=e553]
                  - gridcell "Employee" [ref=e554]
                  - gridcell "Jos Buttler" [ref=e555]
                - row "Press SPACE to select this row." [ref=e556] [cursor=pointer]:
                  - gridcell "lnxu.llgq18@mail.com" [ref=e557]
                  - gridcell "Employee" [ref=e558]
                  - gridcell "Jos Buttler" [ref=e559]
                - row "Press SPACE to select this row." [ref=e560] [cursor=pointer]:
                  - gridcell "gjummo@testmail.com" [ref=e561]
                  - gridcell "Employee" [ref=e562]
                  - gridcell "Nikhil Pachipala" [ref=e563]
                - row "Press SPACE to select this row." [ref=e564] [cursor=pointer]:
                  - gridcell "lqbisl@testmail.com" [ref=e565]
                  - gridcell "Lead" [ref=e566]
                  - gridcell "Nikhil Pachipala" [ref=e567]
                - row "Press SPACE to select this row." [ref=e568] [cursor=pointer]:
                  - gridcell "oslead@gmail.com" [ref=e569]
                  - gridcell "Lead" [ref=e570]
                  - gridcell "tejaswini Llll" [ref=e571]
                - row "Press SPACE to select this row." [ref=e572] [cursor=pointer]:
                  - gridcell "otxrvd@testmail.com" [ref=e573]
                  - gridcell "Lead" [ref=e574]
                  - gridcell "Nikhil Pachipala" [ref=e575]
                - row "Press SPACE to select this row." [ref=e576] [cursor=pointer]:
                  - gridcell "yroc.ekxa86@mail.com" [ref=e577]
                  - gridcell "Employee" [ref=e578]
                  - gridcell "Jos Buttler" [ref=e579]
                - row "Press SPACE to select this row." [ref=e580] [cursor=pointer]:
                  - gridcell "hxby.fdvd85@mail.com" [ref=e581]
                  - gridcell "Employee" [ref=e582]
                  - gridcell "Jos Buttler" [ref=e583]
                - row "Press SPACE to select this row." [ref=e584] [cursor=pointer]:
                  - gridcell "ats5er@testmail.com" [ref=e585]
                  - gridcell "HR" [ref=e586]
                  - gridcell "Nikhil Pachipala" [ref=e587]
                - row "Press SPACE to select this row." [ref=e588] [cursor=pointer]:
                  - gridcell "clk5hf@testmail.com" [ref=e589]
                  - gridcell "HR" [ref=e590]
                  - gridcell "Nikhil Pachipala" [ref=e591]
                - row "Press SPACE to select this row." [ref=e592] [cursor=pointer]:
                  - gridcell "alu6k6@testmail.com" [ref=e593]
                  - gridcell "Admin" [ref=e594]
                  - gridcell "Nikhil Pachipala" [ref=e595]
                - row "Press SPACE to select this row." [ref=e596] [cursor=pointer]:
                  - gridcell "employee@gmail.com" [ref=e597]
                  - gridcell "HR" [ref=e598]
                  - gridcell "Jilan Shaik" [ref=e599]
                - row "Press SPACE to select this row." [ref=e600] [cursor=pointer]:
                  - gridcell "9d1yrk@testmail.com" [ref=e601]
                  - gridcell "Admin" [ref=e602]
                  - gridcell "Nikhil Pachipala" [ref=e603]
                - row "Press SPACE to select this row." [ref=e604] [cursor=pointer]:
                  - gridcell "dileep.gedela+1@openskale.com" [ref=e605]
                  - gridcell "Admin" [ref=e606]
                  - gridcell "Balla Deepthi" [ref=e607]
                - row "Press SPACE to select this row." [ref=e608] [cursor=pointer]:
                  - gridcell "ydzd.jqrf92@mail.com" [ref=e609]
                  - gridcell "Employee" [ref=e610]
                  - gridcell "Jos Buttler" [ref=e611]
                - row "Press SPACE to select this row." [ref=e612] [cursor=pointer]:
                  - gridcell "jilan@gmail.com" [ref=e613]
                  - gridcell "Admin" [ref=e614]
                  - gridcell "Balla Deepthi" [ref=e615]
            - generic [ref=e624]:
              - status [ref=e625]: 1 to 20 of 1,648
              - button "First Page" [disabled] [ref=e626]: 
              - button "Previous Page" [disabled] [ref=e627]: 
              - status [ref=e628]: Page 1 of 83
              - button "Next Page" [ref=e629] [cursor=pointer]: 
              - button "Last Page" [ref=e630] [cursor=pointer]: 
    - generic [ref=e632]:
      - paragraph [ref=e634]: Upload File
      - generic [ref=e637]:
        - paragraph [ref=e638] [cursor=pointer]: Download Sample File
        - generic [ref=e639]:
          - generic [ref=e640] [cursor=pointer]: Upload
          - generic [ref=e642]:
            - textbox [ref=e643]
            - generic: File Name
          - button "Cancel" [ref=e645] [cursor=pointer]
      - generic [ref=e646]:
        - button "Cancel" [ref=e647] [cursor=pointer]
        - button "Submit" [disabled] [ref=e648]
```

# Test source

```ts
  122 |   async submitAndValidate(): Promise<void> {
  123 | 
  124 |     await this.addBtn.click();
  125 | 
  126 |     await expect(this.statusMessage)
  127 |       .toHaveText('Saved Successfully', { timeout: 10000 });
  128 | 
  129 |     let found = false;
  130 | 
  131 |     for (let i = 0; i < 5; i++) {
  132 | 
  133 |       await this.searchEmployee();
  134 | 
  135 |       const row = this.page.locator('.ag-cell', {
  136 |         hasText: this.newEmployeeId
  137 |       });
  138 | 
  139 |       if (await row.count() > 0) {
  140 | 
  141 |         found = true;
  142 |         break;
  143 | 
  144 |       }
  145 | 
  146 |       await this.page.waitForTimeout(1000);
  147 | 
  148 |     }
  149 | 
  150 |     expect(found).toBeTruthy();
  151 | 
  152 |   }
  153 | 
  154 |   async searchEmployee(): Promise<void> {
  155 | 
  156 |     await this.searchBox.fill(this.newEmployeeId);
  157 |     await this.searchBox.press('Enter');
  158 |     await this.page.waitForTimeout(800);
  159 | 
  160 |   }
  161 | 
  162 |   async selectEmployeeCheckbox(): Promise<void> {
  163 | 
  164 |     const cell = this.page.locator('.ag-cell', {
  165 |       hasText: this.newEmployeeId
  166 |     }).first();
  167 | 
  168 |     await expect(cell).toBeVisible({ timeout: 10000 });
  169 | 
  170 |     const row = cell.locator("xpath=ancestor::div[@role='row']");
  171 |     const checkbox = row.locator('input.ag-checkbox-input');
  172 | 
  173 |     await checkbox.check({ force: true });
  174 | 
  175 |     await expect(checkbox).toBeChecked();
  176 | 
  177 |   }
  178 | 
  179 |   async deleteEmployee(): Promise<void> {
  180 | 
  181 |     await this.selectEmployeeCheckbox();
  182 | 
  183 |     await expect(this.deleteBtn)
  184 |       .toBeEnabled({ timeout: 10000 });
  185 | 
  186 |     await this.deleteBtn.click();
  187 | 
  188 |     const confirmPopup = this.page.locator("//p[text()='Confirm Delete']");
  189 | 
  190 |     await expect(confirmPopup)
  191 |       .toBeVisible({ timeout: 5000 });
  192 | 
  193 |     const yesBtn = this.page.locator("//button[text()='Yes']");
  194 | 
  195 |     await yesBtn.click();
  196 | 
  197 |     await expect(this.statusMessage)
  198 |       .toHaveText(/Deleted Successfully|Success/i, { timeout: 10000 });
  199 | 
  200 |   }
  201 | 
  202 |   async validateEmployeeDeleted(): Promise<void> {
  203 | 
  204 |     await this.searchEmployee();
  205 | 
  206 |     const row = this.page.locator('.ag-cell', {
  207 |       hasText: this.newEmployeeId
  208 |     });
  209 | 
  210 |     await expect(row).toHaveCount(0);
  211 | 
  212 |   }
  213 | 
  214 |   async importEmployeeExcel(filePath: string): Promise<void> {
  215 | 
  216 |     await this.importExcelBtn.click();
  217 | 
  218 |     await this.fileInput.waitFor({
  219 |       state: 'attached'
  220 |     });
  221 | 
> 222 |     await this.fileInput.setInputFiles(filePath);
      |     ^ Error: ENOENT: no such file or directory, stat 'D:\New folder\UrBuddiAddEmployee\testData\sample_employee_details_T001.xlsx'
  223 | 
  224 |     const fileName = filePath.split('/').pop()!;
  225 | 
  226 |     await expect(this.page.locator('input[readonly]'))
  227 |       .toHaveValue(fileName);
  228 | 
  229 |     await this.submitBtn.click();
  230 | 
  231 |   }
  232 | 
  233 | }
  234 | 
```