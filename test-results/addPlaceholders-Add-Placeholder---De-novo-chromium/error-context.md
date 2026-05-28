# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addPlaceholders.spec.ts >> Add Placeholder - De novo
- Location: tests\addPlaceholders.spec.ts:7:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('PW-HS-1779990262424')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - progressbar
  - generic [ref=e5]:
    - link [ref=e8] [cursor=pointer]:
      - /url: "#/"
      - img [ref=e10]
    - list [ref=e15]:
      - listitem [ref=e16]:
        - link "My Workspace" [ref=e17] [cursor=pointer]:
          - /url: "#/myworkspace"
          - text: My Workspace
      - listitem [ref=e19]:
        - generic [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: 
          - text: Dashboards
      - listitem [ref=e22]:
        - link "Navigator" [ref=e23] [cursor=pointer]:
          - /url: "#/navigator"
          - text: Navigator
      - listitem [ref=e25]:
        - link " Libraries" [ref=e26] [cursor=pointer]:
          - /url: "#/libraries"
          - generic [ref=e27]: 
          - text: Libraries
      - listitem [ref=e28]:
        - link " Info Models" [ref=e29] [cursor=pointer]:
          - /url: "#/infomodels"
          - generic [ref=e30]: 
          - text: Info Models
      - listitem [ref=e31]:
        - link " Metadata" [ref=e32] [cursor=pointer]:
          - /url: "#/metadata"
          - generic [ref=e33]: 
          - text: Metadata
      - listitem [ref=e34]:
        - link " Templates" [ref=e35] [cursor=pointer]:
          - /url: "#/templates"
          - generic [ref=e36]: 
          - text: Templates
      - listitem [ref=e37]:
        - link "Teams" [ref=e38] [cursor=pointer]:
          - /url: "#/teams"
          - text: Teams
      - listitem [ref=e40]:
        - generic [ref=e41] [cursor=pointer]: Utilities
      - listitem [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Settings
    - list [ref=e48]:
      - listitem [ref=e49]:
        - generic [ref=e52] [cursor=pointer]: My Settings
      - generic [ref=e53]:
        - link "Show less information":
          - /url: javascript:;
  - navigation [ref=e57]:
    - generic [ref=e58]:
      - generic [ref=e60]:
        - generic:
          - generic:
            - list:
              - listitem [ref=e61]:
                - generic [ref=e62]: 
                - generic "Info Models" [ref=e63]
      - img [ref=e67]
      - list [ref=e70]:
        - listitem [ref=e71]:
          - link "Toggle screen" [ref=e72] [cursor=pointer]:
            - /url: javascript:;
        - listitem [ref=e74]:
          - generic "Notifications" [ref=e75] [cursor=pointer]:
            - generic [ref=e77]: "9"
        - listitem [ref=e78]:
          - generic "User settings" [ref=e79] [cursor=pointer]
  - generic [ref=e89]:
    - generic [ref=e91]:
      - heading "Info Model Explorer" [level=4] [ref=e92]
      - generic [ref=e93]:
        - link "Manage TLF profiles" [ref=e94] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Manage TLF profiles" [ref=e95]
        - link "" [ref=e96] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Common instructional text" [ref=e97]: 
        - link "" [ref=e98] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Export/Import instructional text" [ref=e99]: 
        - link "" [ref=e100] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Export info model" [ref=e101]: 
        - link "" [ref=e102] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Import info model" [ref=e103]: 
        - link "Search" [ref=e104] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Search" [ref=e105]
        - link "Refresh" [ref=e106] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Refresh" [ref=e107]
        - link "Add hierarchical set" [ref=e108] [cursor=pointer]:
          - /url: javascript:void(0);
          - generic "Add hierarchical set" [ref=e109]
    - tree [ref=e112]:
      - group [ref=e113]:
        - treeitem " PWT First Sub-Hierachical Set updated " [ref=e114] [cursor=pointer]:
          - generic [ref=e115]: 
          - generic [ref=e116]: PWT First Sub-Hierachical Set updated
          - generic "Document" [ref=e117]: 
        - treeitem " Clinical " [ref=e118] [cursor=pointer]:
          - generic [ref=e119]: 
          - generic [ref=e120]: Clinical
          - generic "Document" [ref=e121]: 
        - treeitem " GenAI for 25GR1 Acceptance " [ref=e122] [cursor=pointer]:
          - generic [ref=e123]: 
          - generic [ref=e124]: GenAI for 25GR1 Acceptance
          - generic "Document" [ref=e125]: 
        - treeitem " Clinical Short " [expanded] [ref=e126] [cursor=pointer]:
          - generic [ref=e127]: 
          - generic [ref=e128]: Clinical Short
          - generic "Document" [ref=e129]: 
        - generic [ref=e130]:
          - treeitem " PY " [expanded] [active] [selected] [ref=e131] [cursor=pointer]:
            - generic [ref=e132]: 
            - generic [ref=e133]: PY
            - generic "Document" [ref=e134]: 
          - generic [ref=e135]:
            - treeitem " PY- Protocol " [ref=e136] [cursor=pointer]:
              - generic [ref=e137]: 
              - generic [ref=e138]: PY- Protocol
              - generic "Document" [ref=e139]: 
            - treeitem " PY - SAP " [ref=e140] [cursor=pointer]:
              - generic [ref=e141]: 
              - generic [ref=e142]: PY - SAP
              - generic "Document" [ref=e143]: 
            - treeitem " PY - CSR " [ref=e144] [cursor=pointer]:
              - generic [ref=e145]: 
              - generic [ref=e146]: PY - CSR
              - generic "Document" [ref=e147]: 
            - treeitem " PY - Protocol - GenAI (Dependencies) " [ref=e148] [cursor=pointer]:
              - generic [ref=e149]: 
              - generic [ref=e150]: PY - Protocol - GenAI (Dependencies)
              - generic "Document" [ref=e151]: 
            - treeitem " PY protokoll " [ref=e152] [cursor=pointer]:
              - generic [ref=e153]: 
              - generic [ref=e154]: PY protokoll
              - generic "Document" [ref=e155]: 
            - treeitem " PY - Protokoll szülő " [ref=e156] [cursor=pointer]:
              - generic [ref=e157]: 
              - generic [ref=e158]: PY - Protokoll szülő
              - generic "Document" [ref=e159]: 
            - treeitem " PY - SAP dependencies " [ref=e160] [cursor=pointer]:
              - generic [ref=e161]: 
              - generic [ref=e162]: PY - SAP dependencies
              - generic "Document" [ref=e163]: 
            - treeitem " SAP Dependency " [ref=e164] [cursor=pointer]:
              - generic [ref=e165]: 
              - generic [ref=e166]: SAP Dependency
              - generic "Document" [ref=e167]: 
            - treeitem " US 50839 " [ref=e168] [cursor=pointer]:
              - generic [ref=e169]: 
              - generic [ref=e170]: US 50839
              - generic "Document" [ref=e171]: 
            - treeitem " US 50839 SAP " [ref=e172] [cursor=pointer]:
              - generic [ref=e173]: 
              - generic [ref=e174]: US 50839 SAP
              - generic "Document" [ref=e175]: 
            - treeitem " Diabetes " [ref=e176] [cursor=pointer]:
              - generic [ref=e177]: 
              - generic [ref=e178]: Diabetes
              - generic "Document" [ref=e179]: 
            - treeitem " Protocol Title " [ref=e180] [cursor=pointer]:
              - generic [ref=e181]: 
              - generic [ref=e182]: Protocol Title
              - generic "Document" [ref=e183]: 
            - treeitem " PW HS " [ref=e184] [cursor=pointer]:
              - generic [ref=e185]: 
              - generic [ref=e186]: PW HS
              - generic "Document" [ref=e187]: 
            - treeitem " PW-HS-1779987923427 " [ref=e188] [cursor=pointer]:
              - generic [ref=e189]: 
              - generic [ref=e190]: PW-HS-1779987923427
              - generic "Document" [ref=e191]: 
            - treeitem " PW-HS-1779988448750 " [ref=e192] [cursor=pointer]:
              - generic [ref=e193]: 
              - generic [ref=e194]: PW-HS-1779988448750
              - generic "Document" [ref=e195]: 
            - treeitem " PW-HS-1779989694629 " [ref=e196] [cursor=pointer]:
              - generic [ref=e197]: 
              - generic [ref=e198]: PW-HS-1779989694629
              - generic "Document" [ref=e199]: 
            - treeitem " PW-HS-1779990244654 " [ref=e200] [cursor=pointer]:
              - generic [ref=e201]: 
              - generic [ref=e202]: PW-HS-1779990244654
              - generic "Document" [ref=e203]: 
          - treeitem " PG " [ref=e204] [cursor=pointer]:
            - generic [ref=e205]: 
            - generic [ref=e206]: PG
            - generic "Document" [ref=e207]: 
          - treeitem " AK " [ref=e208] [cursor=pointer]:
            - generic [ref=e209]: 
            - generic [ref=e210]: AK
            - generic "Document" [ref=e211]: 
          - treeitem " AP " [ref=e212] [cursor=pointer]:
            - generic [ref=e213]: 
            - generic [ref=e214]: AP
            - generic "Document" [ref=e215]: 
          - treeitem " Demo-SS " [ref=e216] [cursor=pointer]:
            - generic [ref=e217]: 
            - generic [ref=e218]: Demo-SS
            - generic "Document" [ref=e219]: 
          - treeitem " SS Set " [ref=e220] [cursor=pointer]:
            - generic [ref=e221]: 
            - generic [ref=e222]: SS Set
            - generic "Document" [ref=e223]: 
          - treeitem " SG " [ref=e224] [cursor=pointer]:
            - generic [ref=e225]: 
            - generic [ref=e226]: SG
            - generic "Document" [ref=e227]: 
          - treeitem " Export/Import " [ref=e228] [cursor=pointer]:
            - generic [ref=e229]: 
            - generic [ref=e230]: Export/Import
            - generic "Document" [ref=e231]: 
          - treeitem " Protocol HS " [ref=e232] [cursor=pointer]:
            - generic [ref=e233]: 
            - generic [ref=e234]: Protocol HS
            - generic "Document" [ref=e235]: 
          - treeitem " Demo-SD " [ref=e236] [cursor=pointer]:
            - generic [ref=e237]: 
            - generic [ref=e238]: Demo-SD
            - generic "Document" [ref=e239]: 
          - treeitem " Authoring " [ref=e240] [cursor=pointer]:
            - generic [ref=e241]: 
            - generic [ref=e242]: Authoring
            - generic "Document" [ref=e243]: 
          - treeitem " Biopharma HS " [ref=e244] [cursor=pointer]:
            - generic [ref=e245]: 
            - generic [ref=e246]: Biopharma HS
            - generic "Document" [ref=e247]: 
          - treeitem " Protocol Workbook HS 01 " [ref=e248] [cursor=pointer]:
            - generic [ref=e249]: 
            - generic [ref=e250]: Protocol Workbook HS 01
            - generic "Document" [ref=e251]: 
          - treeitem " test hs 3202026 703 " [ref=e252] [cursor=pointer]:
            - generic [ref=e253]: 
            - generic [ref=e254]: test hs 3202026 703
            - generic "Document" [ref=e255]: 
        - treeitem " IN Clinical " [ref=e256] [cursor=pointer]:
          - generic [ref=e257]: 
          - generic [ref=e258]: IN Clinical
          - generic "Document" [ref=e259]: 
        - treeitem " BDLM " [ref=e260] [cursor=pointer]:
          - generic [ref=e261]: 
          - generic [ref=e262]: BDLM
          - generic "Document" [ref=e263]: 
        - treeitem " Document Ingestion Add-In Demo " [ref=e264] [cursor=pointer]:
          - generic [ref=e265]: 
          - generic [ref=e266]: Document Ingestion Add-In Demo
          - generic "Document" [ref=e267]: 
        - treeitem " Clinical - WP " [ref=e268] [cursor=pointer]:
          - generic [ref=e269]: 
          - generic [ref=e270]: Clinical - WP
          - generic "Document" [ref=e271]: 
        - treeitem " Demo 2026 " [ref=e272] [cursor=pointer]:
          - generic [ref=e273]: 
          - generic [ref=e274]: Demo 2026
          - generic "Document" [ref=e275]: 
        - treeitem " PWT Clinical " [ref=e276] [cursor=pointer]:
          - generic [ref=e277]: 
          - generic [ref=e278]: PWT Clinical
          - generic "Document" [ref=e279]: 
        - treeitem " HK_Clinical " [ref=e280] [cursor=pointer]:
          - generic [ref=e281]: 
          - generic [ref=e282]: HK_Clinical
          - generic "Document" [ref=e283]: 
        - treeitem " PWT 57062 INFO HS " [ref=e284] [cursor=pointer]:
          - generic [ref=e285]: 
          - generic [ref=e286]: PWT 57062 INFO HS
          - generic "Document" [ref=e287]: 
        - treeitem " PWT IMSR Demo " [ref=e288] [cursor=pointer]:
          - generic [ref=e289]: 
          - generic [ref=e290]: PWT IMSR Demo
          - generic "Document" [ref=e291]: 
        - treeitem " PWT Hierachical Set updated " [ref=e292] [cursor=pointer]:
          - generic [ref=e293]: 
          - generic [ref=e294]: PWT Hierachical Set updated
          - generic "Document" [ref=e295]: 
        - treeitem " PWT NonAdmin Hierachical Set Updated " [ref=e296] [cursor=pointer]:
          - generic [ref=e297]: 
          - generic [ref=e298]: PWT NonAdmin Hierachical Set Updated
          - generic "Document" [ref=e299]: 
        - treeitem " Demo HS " [ref=e300] [cursor=pointer]:
          - generic [ref=e301]: 
          - generic [ref=e302]: Demo HS
          - generic "Document" [ref=e303]: 
        - treeitem " Info Models 2026 R1 Updated " [ref=e304] [cursor=pointer]:
          - generic [ref=e305]: 
          - generic [ref=e306]: Info Models 2026 R1 Updated
          - generic "Document" [ref=e307]: 
```

# Test source

```ts
  1  | import {Page, expect} from "@playwright/test";
  2  | 
  3  | export class AddPlaceholder {
  4  | 
  5  | 
  6  |     constructor (private page:Page) {}
  7  | 
  8  |     async rightClickHS(hsName: string) {
> 9  |         await this.page.getByText(hsName).click({ button: 'right' });
     |                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  10 |     }
  11 | 
  12 |     async selectAddHS() {
  13 |         await this.page.getByText('Add Element').click();
  14 |     }
  15 |     
  16 |     async verifyAddElementForm(){
  17 |         await expect(this.page.getByRole('heading', { name: 'Add Element' })).toBeVisible();
  18 |     }
  19 |     
  20 |     async fillElementName(elementName: string) {
  21 |         await this.page.getByPlaceholder('Enter Name').fill(elementName);
  22 |     }
  23 | 
  24 |     async fillAlias(elementName: string) {
  25 |         await this.page.getByLabel('Alias:').fill(elementName);
  26 |     }
  27 |  
  28 |     async clickSave() {
  29 |         await this.page.getByRole('button', {
  30 |             name: 'Save'
  31 |         }).click();
  32 |     }
  33 |     async verifyToastermsg() {
  34 |         await expect (this.page.getByText("added successfully")).toBeVisible();
  35 |     }
  36 | 
  37 | 
  38 | }
```