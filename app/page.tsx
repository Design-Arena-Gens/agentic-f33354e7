/* eslint-disable react/no-unescaped-entities */
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type SlideSection = {
  title: string;
  badge?: string;
  content: JSX.Element;
};

export default function Page() {
  const sections = useMemo<SlideSection[]>(
    () => [
      {
        title: "EEXI ? Energy Efficiency for Existing Ships",
        badge: "IMO MEPC 335(76) + 336(76)",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <div className="muted small">What</div>
                <h3>Mandatory design-efficiency index for existing ships</h3>
                <p className="muted">
                  The Energy Efficiency Existing Ship Index (EEXI) evaluates a vessel's technical
                  efficiency at a reference operating point, enforcing minimum performance baselines
                  for ships ? 400 GT under MARPOL Annex VI.
                </p>
              </div>
              <div className="card grid-6">
                <div className="muted small">Why</div>
                <h3>Align with IMO GHG strategy and decarbonization</h3>
                <ul className="bullets muted">
                  <li>Supports 2030 interim goals and 2050 ambition</li>
                  <li>Targets design limitations and retrofit potential</li>
                  <li>Complements operational metric CII and SEEMP Part III</li>
                </ul>
              </div>
              <div className="card grid-12">
                <div className="pill ok">In force: 2023 initial survey; IEE Certificate updated</div>
                <div style={{ height: 8 }} />
                <div className="pill warn">Scope: cargo, gas, tanker, bulk, container, general cargo, Ro-Ro, etc.</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Scope and Applicability",
        badge: "? 400 GT, International voyages",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>Ships covered</h3>
                <ul className="bullets muted">
                  <li>Bulk carriers, oil/chemical tankers, gas carriers</li>
                  <li>Container ships, general cargo ships</li>
                  <li>Refrigerated cargo, combination carriers</li>
                  <li>Ro-Ro cargo/passenger, LNG carriers, cruise ships</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Key exclusions/notes</h3>
                <ul className="bullets muted">
                  <li>Warships, government non-commercial vessels</li>
                  <li>Non-convention vessels not on international voyages</li>
                  <li>Major conversions: treated as new ships, may re-trigger assessment</li>
                </ul>
              </div>
              <div className="card grid-12">
                <h3>Certification</h3>
                <ul className="bullets muted">
                  <li>Initial survey by RO/flag: verify attained EEXI ? required EEXI</li>
                  <li>International Energy Efficiency Certificate (IEE) endorsed with EEXI data</li>
                  <li>Onboard documentation: Technical File (incl. EPL/ShaPoLi, sea trial/verification)</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "EEXI ? Conceptual Formula",
        badge: "Attained vs. Required",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>Attained EEXI (design-based)</h3>
                <p className="muted">
                  Attained EEXI approximates grams of CO? per transport work at a referenced speed
                  and draft, factoring installed power limits and technical devices.
                </p>
                <ul className="bullets muted">
                  <li>Main engine and auxiliary engine contributions</li>
                  <li>Propulsion, transmission, and shaft efficiency factors</li>
                  <li>Corrections for innovative technologies (e.g., wind, air lubrication)</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Required EEXI (benchmark)</h3>
                <p className="muted">
                  Required EEXI is derived from ship type, size (deadweight/GT), and reduction
                  factors relative to EEDI baselines per MEPC.335(76).
                </p>
                <ul className="bullets muted">
                  <li>Reduction rates vary by ship type and size band</li>
                  <li>Demands compliance at initial survey after 2023</li>
                </ul>
              </div>
              <div className="card grid-12">
                <div className="pill ok">Compliance: attained EEXI ? required EEXI</div>
                <div style={{ height: 8 }} />
                <div className="pill warn">Non-compliance triggers corrective measures or power limitation</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Common Compliance Strategies",
        badge: "Retrofit + Limitation",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>Engine/Shaft Power Limitation</h3>
                <ul className="bullets muted">
                  <li>EPL: Electronic derating of MCR to limited power</li>
                  <li>ShaPoLi: Mechanical/shaft-based limiters with logger</li>
                  <li>Requires onboard monitoring, override protocol for safety</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Hydrodynamic Retrofits</h3>
                <ul className="bullets muted">
                  <li>Propeller upgrades, Mewis ducts, rudder bulbs</li>
                  <li>Hull cleaning, low-friction/air lubrication systems</li>
                  <li>Trim/speed optimization to reduce resistance</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Machinery & Energy Systems</h3>
                <ul className="bullets muted">
                  <li>Waste heat recovery, VFDs for pumps/fans</li>
                  <li>LED lighting, HVAC optimization, auxiliary efficiency</li>
                  <li>Alternative fuels/hybridization where feasible</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Data & Governance</h3>
                <ul className="bullets muted">
                  <li>Update SEEMP Part I/II/III alignment with CII</li>
                  <li>Accurate technical file, verification records, override logs</li>
                  <li>Charterer engagement on speed and voyage planning</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "EPL vs. ShaPoLi ? Quick View",
        badge: "Power Limitation Options",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>EPL (Engine Power Limitation)</h3>
                <ul className="bullets muted">
                  <li>Software limitation of engine power setpoint</li>
                  <li>Least invasive, cost-effective, quick implementation</li>
                  <li>Needs seal/witness by RO and documentation</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>ShaPoLi (Shaft Power Limitation)</h3>
                <ul className="bullets muted">
                  <li>Measures shaft power and limits via control device</li>
                  <li>Independent of engine controls, strong audit trail</li>
                  <li>Hardware install, sensor calibration, logger and alarms</li>
                </ul>
              </div>
              <div className="card grid-12">
                <div className="pill warn">Both require override for safety-critical maneuvers</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Documentation & Survey",
        badge: "Technical File + IEE",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>Technical File</h3>
                <ul className="bullets muted">
                  <li>Calculation of attained EEXI with assumptions</li>
                  <li>Drawings, specs, software/hardware limitation details</li>
                  <li>Sea trial or verification data when applicable</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Survey & Certification</h3>
                <ul className="bullets muted">
                  <li>Initial survey post-2023 implementation date</li>
                  <li>Verification by Recognized Organization (class)</li>
                  <li>IEE Certificate re-issued/endorsed upon compliance</li>
                </ul>
              </div>
              <div className="card grid-12">
                <h3>Onboard Controls & Logs</h3>
                <ul className="bullets muted">
                  <li>Override logging with date/time, reason, and duration</li>
                  <li>Periodic tests, maintenance records of limitation devices</li>
                  <li>Alignment with safety management system (ISM)</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Relationship to CII and SEEMP",
        badge: "Design vs. Operation",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>Design metric</h3>
                <p className="muted">
                  EEXI is a technical/design metric, assessed once at initial survey after 2023.
                </p>
                <ul className="bullets muted">
                  <li>Focus on inherent efficiency potential</li>
                  <li>Usually improved via retrofits or power limits</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Operational metric</h3>
                <p className="muted">
                  CII rates annual operational efficiency; SEEMP Part III provides the plan to meet
                  targets, including corrective actions for ratings.
                </p>
                <ul className="bullets muted">
                  <li>Speed, routing, weather, cargo utilization</li>
                  <li>Data capture and continuous improvement loop</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Case Study ? Container Ship (50,000 DWT class)",
        badge: "Illustrative",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>Baseline</h3>
                <ul className="bullets muted">
                  <li>Attained EEXI above required threshold at design MCR</li>
                  <li>Retrofit window: 10?20 days at scheduled drydock</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Measures considered</h3>
                <ul className="bullets muted">
                  <li>EPL to 80% MCR, propeller upgrade</li>
                  <li>Hull coating refresh, trim optimization software</li>
                </ul>
              </div>
              <div className="card grid-12">
                <h3>Outcome</h3>
                <ul className="bullets muted">
                  <li>Attained EEXI reduced below required</li>
                  <li>Estimated fuel saving: 8?12% at service speed</li>
                  <li>Payback < 2 years considering fuel prices and off-hire</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Implementation Roadmap",
        badge: "90?180 days typical",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-6">
                <h3>Assessment</h3>
                <ul className="bullets muted">
                  <li>Data collection and baseline calc per MEPC guidelines</li>
                  <li>Gap analysis vs. required EEXI by ship type</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Retrofit Design</h3>
                <ul className="bullets muted">
                  <li>Concept selection: EPL/ShaPoLi, hydrodynamics, auxiliaries</li>
                  <li>Class engagement, risk and safety case, documentation</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Installation</h3>
                <ul className="bullets muted">
                  <li>Yard slot planning, material procurement, integration tests</li>
                  <li>Onboard training, override drills, logging</li>
                </ul>
              </div>
              <div className="card grid-6">
                <h3>Verification</h3>
                <ul className="bullets muted">
                  <li>Initial survey, IEE endorsement, records onboard</li>
                  <li>Post-implementation performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Key Takeaways",
        badge: "Executive Summary",
        content: (
          <div className="slide-content">
            <div className="slide-grid">
              <div className="card grid-12">
                <ul className="bullets muted">
                  <li>EEXI is a one-time design compliance; plan retrofits proactively</li>
                  <li>Power limitation (EPL/ShaPoLi) is fast and cost-effective</li>
                  <li>Couple EEXI with CII/SEEMP operational improvements for impact</li>
                  <li>Maintain robust documentation and override governance</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(sections.length - 1, next));
      setIndex(clamped);
    },
    [sections.length]
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key.toLowerCase() === "l") next();
      if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key.toLowerCase() === "h") prev();
      if (e.key === "Home") go(0);
      if (e.key === "End") go(sections.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, prev, sections.length]);

  const progress = ((index + 1) / sections.length) * 100;

  return (
    <div className="deck">
      <div className="topbar">
        <div className="brand">
          <div className="brand-badge" />
          <div>
            <div className="brand-title">EEXI Presentation</div>
            <div className="brand-sub">Energy Efficiency for Existing Ships</div>
          </div>
        </div>
        <div className="controls">
          <button className="btn ghost small" onClick={() => go(0)}>
            ? First <span className="kbd">Home</span>
          </button>
          <button className="btn" onClick={prev}>
            ? Prev <span className="kbd">?</span>
          </button>
          <button className="btn" onClick={next}>
            Next ? <span className="kbd">?</span>
          </button>
        </div>
      </div>

      <main className="stage">
        <article className="slide">
          <header className="slide-header">
            <h1 className="slide-title">{sections[index].title}</h1>
            {sections[index].badge ? <span className="slide-badge">{sections[index].badge}</span> : null}
          </header>
          {sections[index].content}
        </article>
      </main>

      <footer className="footer">
        <div>
          Slide {index + 1} / {sections.length}
        </div>
        <div className="muted">
          Navigate with <span className="kbd">?</span>/<span className="kbd">?</span>, <span className="kbd">Home</span>, <span className="kbd">End</span>
        </div>
      </footer>

      <div className="progress">
        <div className="progress-inner" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
