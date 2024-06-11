document.addEventListener("DOMContentLoaded", function() {
    const components = document.querySelectorAll(".component");

    components.forEach(component => {
        component.addEventListener("mouseover", function(event) {
            const tooltipId = "tooltip-" + this.id;
            const tooltipText = document.getElementById(tooltipId).innerHTML;
            showTooltip(event, tooltipText);

            // Set the current component as hovered and others as dimmed
            components.forEach(c => {
                if (c === this) {
                    c.classList.add("hover");
                    c.classList.remove("dimmed");
                } else {
                    c.classList.add("dimmed");
                }
            });
        });

        component.addEventListener("mouseout", function() {
            hideTooltip();

            // Remove hover and dimmed classes
            components.forEach(c => {
                c.classList.remove("hover", "dimmed");
            });
        });
    });

    function showTooltip(event, text) {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerHTML = text;
        document.body.appendChild(tooltip);
        tooltip.style.left = event.pageX + 5 + "px";
        tooltip.style.top = event.pageY + 5 + "px";
        tooltip.style.display = "block";
    }

    function hideTooltip() {
        const tooltips = document.querySelectorAll(".tooltip");
        tooltips.forEach(tooltip => tooltip.remove());
    }
});
