export function createCardBackSVG() {
    const xmlns = "http://www.w3.org/2000/svg"
    const svg = document.createElementNS(xmlns, "svg")
    svg.setAttribute("width", "200")
    svg.setAttribute("height", "300")
    svg.setAttribute("viewBox", "0 0 200 300")
    const rect = document.createElementNS(xmlns, "rect")
    rect.setAttribute("width", "200")
    rect.setAttribute("height", "300")
    rect.setAttribute("fill", "#004080")
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
    const circle = document.createElementNS(xmlns, "circle")
    circle.setAttribute("cx", "10")
    circle.setAttribute("cy", "10")
    circle.setAttribute("r", "3")
    circle.setAttribute("fill", "white")
    pattern.appendChild(circle)
    svg.appendChild(pattern)
    const dottedRect = document.createElementNS(xmlns, "rect")
    dottedRect.setAttribute("width", "200")
    dottedRect.setAttribute("height", "300")
    dottedRect.setAttribute("fill", "url(#dots)")
    dottedRect.setAttribute("rx", "20")
    dottedRect.setAttribute("ry", "20")
    svg.appendChild(dottedRect)
    const polygon = document.createElementNS(xmlns, "polygon")
    polygon.setAttribute("points", "100,50 150,150 100,250 50,150")
    polygon.setAttribute("fill", "#ffcc00")
    svg.appendChild(polygon)
    return svg
}
