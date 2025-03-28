export function createSvgCard(value) {
    if (value === undefined) {
        return createGenericSvgCard('#993300', 'black')
    } else {
        return createGenericSvgCard("#004080", '#ffcc00', value)
    }
}

function createGenericSvgCard(backgroundColor, circleColor, value) {
    const xmlns = "http://www.w3.org/2000/svg"
    const svg = document.createElementNS(xmlns, "svg")
    svg.setAttribute("width", "200")
    svg.setAttribute("height", "300")
    svg.setAttribute("viewBox", "0 0 200 300")
    const rect = document.createElementNS(xmlns, "rect")
    rect.setAttribute("width", "200")
    rect.setAttribute("height", "300")
    rect.setAttribute("fill", backgroundColor)
    rect.setAttribute("rx", "20")
    rect.setAttribute("ry", "20")
    svg.appendChild(rect)
    const pattern = document.createElementNS(xmlns, "pattern")
    pattern.setAttribute("id", "dots")
    pattern.setAttribute("x", "0")
    pattern.setAttribute("y", "0")
    pattern.setAttribute("width", "20")
    pattern.setAttribute("height", "20")
    pattern.setAttribute("patternUnits", "userSpaceOnUse")
    const dot = document.createElementNS(xmlns, "circle")
    dot.setAttribute("cx", "10")
    dot.setAttribute("cy", "10")
    dot.setAttribute("r", "3")
    dot.setAttribute("fill", "white")
    pattern.appendChild(dot)
    svg.appendChild(pattern)
    const dottedRect = document.createElementNS(xmlns, "rect")
    dottedRect.setAttribute("width", "200")
    dottedRect.setAttribute("height", "300")
    dottedRect.setAttribute("fill", "url(#dots)")
    dottedRect.setAttribute("rx", "20")
    dottedRect.setAttribute("ry", "20")
    svg.appendChild(dottedRect)
    const circle = document.createElementNS(xmlns, "circle")
    circle.setAttribute("cx", "100")
    circle.setAttribute("cy", "150")
    circle.setAttribute("r", "70")
    circle.setAttribute("fill", circleColor)
    svg.appendChild(circle)
    if (value) {
        const text = document.createElementNS(xmlns, "text")
        text.setAttribute("x", "100")
        text.setAttribute("y", "155")
        text.setAttribute("text-anchor", "middle")
        text.setAttribute("dominant-baseline", "middle")
        text.setAttribute("font-size", "72")
        text.setAttribute("font-family", "Helvetica,Arial,sans-serif")
        text.setAttribute("font-weight", "bold")
        text.setAttribute("fill", "#004080")
        text.textContent = value.toString()
        svg.appendChild(text)
    }
    return svg
}
