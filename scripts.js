document.addEventListener("DOMContentLoaded", function() {
    const components = document.querySelectorAll(".component");

    components.forEach(component => {
        component.addEventListener("mouseover", function(event) {
            const tooltipId = "tooltip-" + this.id;
            const tooltipText = document.getElementById(tooltipId).innerHTML;
            showTooltip(event, tooltipId, tooltipText);

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

    function showTooltip(event, tooltipId, text) {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip visible";
        tooltip.innerHTML = text;
        tooltip.id = "active-tooltip";
        tooltip.style.backgroundColor = getComputedStyle(document.getElementById(tooltipId)).backgroundColor;
        document.body.appendChild(tooltip);

        // Position tooltip better on smaller screens
        const tooltipRect = tooltip.getBoundingClientRect();
        let top = event.pageY + 5;
        let left = event.pageX + 5;
        
        if (top + tooltipRect.height > window.innerHeight) {
            top = event.pageY - tooltipRect.height - 5;
        }
        if (left + tooltipRect.width > window.innerWidth) {
            left = event.pageX - tooltipRect.width - 5;
        }

        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";
    }

    function hideTooltip() {
        const tooltips = document.querySelectorAll(".tooltip");
        tooltips.forEach(tooltip => tooltip.remove());
    }
});