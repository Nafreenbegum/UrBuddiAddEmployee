# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login to UrBuddi
- Location: tests\Login.spec.ts:7:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_ACCESS_DENIED at https://dev.urbuddi.com/login
Call log:
  - navigating to "https://dev.urbuddi.com/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your Internet access is blocked" [level=1] [ref=e7]
    - paragraph [ref=e8]: Firewall or antivirus software may have blocked the connection.
    - generic [ref=e9]:
      - paragraph [ref=e10]: "Try:"
      - list [ref=e11]:
        - listitem [ref=e12]: Checking the connection
        - listitem [ref=e13]:
          - link "Checking firewall and antivirus configurations" [ref=e14] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e15]:
          - link "Running Windows Network Diagnostics" [ref=e16] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e17]: ERR_NETWORK_ACCESS_DENIED
  - button "Details" [ref=e19] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  | 
  5  |   readonly page: Page;
  6  |   readonly email: Locator;
  7  |   readonly password: Locator;
  8  |   readonly loginButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 | 
  12 |     this.page = page;
  13 | 
  14 |     this.email = page.locator('#userEmail');
  15 |     this.password = page.locator('#userPassword');
  16 |     this.loginButton = page.getByRole('button', { name: 'Login' });
  17 | 
  18 |   }
  19 | 
  20 |   async login(
  21 |     url: string,
  22 |     email: string,
  23 |     password: string
  24 |   ): Promise<void> {
  25 | 
> 26 |     await this.page.goto(url);
     |                     ^ Error: page.goto: net::ERR_NETWORK_ACCESS_DENIED at https://dev.urbuddi.com/login
  27 | 
  28 |     await this.email.fill(email);
  29 | 
  30 |     await this.password.fill(password);
  31 | 
  32 |     await this.loginButton.click();
  33 | 
  34 |     await this.page.waitForLoadState('networkidle');
  35 | 
  36 |   }
  37 | 
  38 | }
```