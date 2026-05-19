/**
 * Simple Markdown-to-JSX renderer (no external deps, no SSR issues).
 * Handles: h2, h3, p, ul/ol, bold, inline code, links, blockquote, table, horizontal rule.
 */
export function renderMarkdown(md) {
  if (!md) return null;

  const lines = md.split("\n");
  const elements = [];
  let i = 0;
  let key = 0;

  const inline = (text) => {
    // bold **text**
    text = text.replace(/\*\*(.+?)\*\*/g, (_, t) => `<strong>${t}</strong>`);
    // inline code `code`
    text = text.replace(/`(.+?)`/g, (_, t) => `<code>${t}</code>`);
    // link [label](url)
    text = text.replace(/\[(.+?)\]\((.+?)\)/g, (_, label, url) =>
      `<a href="${url}">${label}</a>`
    );
    return text;
  };

  const parseLine = (rawLine) => {
    const text = rawLine.trim();
    if (!text) return null;

    const html = inline(text);
    return (
      <span
        key={key++}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    // --- Skip empty lines
    if (!line) { i++; continue; }

    // --- H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="md-h2">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // --- H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="md-h3">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // --- Horizontal rule
    if (line === "---" || line === "***") {
      elements.push(<hr key={key++} className="md-hr" />);
      i++;
      continue;
    }

    // --- Blockquote
    if (line.startsWith("> ")) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++} className="md-blockquote">
          {quoteLines.map((ql, idx) => (
            <span key={idx} dangerouslySetInnerHTML={{ __html: inline(ql) }} />
          ))}
        </blockquote>
      );
      continue;
    }

    // --- Table (starts with |)
    if (line.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      // row 0 = headers, row 1 = separator, row 2+ = body
      const headers = tableLines[0]
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());
      const rows = tableLines.slice(2).map((row) =>
        row.split("|").filter((c) => c.trim() !== "").map((c) => c.trim())
      );
      elements.push(
        <div key={key++} className="md-table-wrap">
          <table className="md-table">
            <thead>
              <tr>
                {headers.map((h, idx) => (
                  <th key={idx} className="md-th" dangerouslySetInnerHTML={{ __html: inline(h) }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="md-td" dangerouslySetInnerHTML={{ __html: inline(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // --- Unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="md-ul">
          {items.map((item, idx) => (
            <li key={idx} className="md-li" dangerouslySetInnerHTML={{ __html: inline(item) }} />
          ))}
        </ul>
      );
      continue;
    }

    // --- Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="md-ol">
          {items.map((item, idx) => (
            <li key={idx} className="md-li" dangerouslySetInnerHTML={{ __html: inline(item) }} />
          ))}
        </ol>
      );
      continue;
    }

    // --- Regular paragraph
    elements.push(
      <p key={key++} className="md-p" dangerouslySetInnerHTML={{ __html: inline(line) }} />
    );
    i++;
  }

  return <>{elements}</>;
}
