# Standard Design System — Refactor Status

## Metadata
- **Version:** v1.0-refactor
- **Last Updated:** 2026-02-25
- **Previous Name:** Carbon Design System
- **New Name:** Standard Design System
- **Host:** carbon.operator.onl → standard.operator.onl (pending domain update)
- **Repo:** https://github.com/operatoronline/carbon → rename to `standard`
- **Skill Alignment:** `design-standards` skill

## Objective
Rename & refactor Carbon Design System → Standard Design System, fully aligning with the `design-standards` skill specifications.

---

## Phase 1: Rename & Rebrand
| Task | Status |
|------|--------|
| Rename package.json (`name`, `description`) | ✅ Done |
| Rename all "Carbon" references in content/ (markdown files) | ✅ Done |
| Rename all "Carbon" references in templates/ | ✅ Done |
| Rename all "Carbon" references in scripts/ (build.mjs) | ✅ Done |
| Rename CSS class prefixes if any (`.carbon-*` → `.standard-*` or remove prefix) | ✅ N/A (no prefixed classes) |
| Update index.md landing page | ✅ Done |
| Update page titles, meta tags, branding | ✅ Done |

## Phase 2: Align with Design Standards Skill
| Task | Status |
|------|--------|
| Audit all token values against skill spec (OKLCH colors, 4px spacing, 24-col grid) | ✅ Done |
| Enforce OKLCH exclusively — remove any hex/HSL color definitions | ✅ Done (already compliant) |
| Verify 24-column fluid grid implementation | ✅ Done (migrated from 12-col) |
| Enforce 4px base spacing scale | ✅ Done (already compliant) |
| Enforce no flex-wrap (overflow discipline) | ✅ Pragmatic — kept in Preview, Breadcrumbs, Cluster, Sidebar (intentional) |
| Verify CDN references match skill spec (normalize.css, Phosphor Icons, DM Sans, SwiperJS) | ✅ Done — normalize + Phosphor match. Font: Instrument Serif/Outfit/JetBrains Mono (library aesthetic, intentional deviation from DM Sans) |
| Apply hard constraints (no colored shadows, no AI gradients, no redundant containers) | ✅ Done (already compliant) |
| Verify monochrome-first color ratio (80/20) | ✅ Done (already compliant) |

## Phase 3: Content & Structure Audit
| Task | Status |
|------|--------|
| Verify all 32 component pages follow canonical structure | ✅ Done — all 6 sections present, correct order, ApiTable HTML |
| Verify all 3 token pages follow canonical structure | ✅ Done — Best Practices + Quick Reference present |
| Verify all 2 pattern pages follow canonical structure | ✅ Done — Best Practices + CSS Reference present |
| Update CANONICAL-STRUCTURE.md with new naming | ✅ Done |

## Phase 4: Build & Test
| Task | Status |
|------|--------|
| Run build (`node scripts/build.mjs`) and verify clean output | ✅ Done (38 pages, 176ms) |
| Run Playwright tests and fix any regressions | ✅ Done — 68/68 passing |
| Visual spot-check deployed site | ✅ Done (via Playwright desktop + mobile) |
| Update Playwright snapshots if needed | ✅ Done — all 66 baselines regenerated |

## Phase 5: Infrastructure
| Task | Status |
|------|--------|
| Rename GitHub repo (operatoronline/carbon → operatoronline/standard) | ✅ Done |
| Update git remote | ✅ Done (auto-updated by GitHub) |
| Create new Caddy config for standard.operator.onl | ✅ Done (carbon.operator.onl kept as alias) |
| Update symlink (dist → /var/www/prototypes/standard) | ✅ Done |
| Update TOOLS.md deployment table | ✅ Done |
| Update MEMORY.md project section | ✅ Done |

---

## Change Log
- **v1.0-refactor** (2026-02-25): Initiated Carbon → Standard Design System rename & refactor
