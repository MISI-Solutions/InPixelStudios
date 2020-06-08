const filterBtnAll = document.querySelector(".filter_all");
const filterBtnSurvivalSpawns = document.querySelector(".filter_survival_spawns")
const filterBtnAdventureMaps = document.querySelector(".filter_adventure_maps");
const filterBtnMashups = document.querySelector(".filter_mashups");
const filterBtnSkinpacks = document.querySelector(".filter_skinpacks");

let currentFilter = "all";

filterBtnAll.addEventListener("click", function() {
    filterBtnAll.classList.add("active");
    filterBtnSurvivalSpawns.classList.remove("active");
    filterBtnAdventureMaps.classList.remove("active");
    filterBtnMashups.classList.remove("active");
    filterBtnSkinpacks.classList.remove("active");

    currentFilter = "all";
    refresh();
});

filterBtnSurvivalSpawns.addEventListener("click", function() {
    filterBtnAll.classList.remove("active");
    filterBtnSurvivalSpawns.classList.add("active");
    filterBtnAdventureMaps.classList.remove("active");
    filterBtnMashups.classList.remove("active");
    filterBtnSkinpacks.classList.remove("active");

    currentFilter = "survivalspawn";
    refresh();
});

filterBtnAdventureMaps.addEventListener("click", function() {
    filterBtnAll.classList.remove("active");
    filterBtnSurvivalSpawns.classList.remove("active");
    filterBtnAdventureMaps.classList.add("active");
    filterBtnMashups.classList.remove("active");
    filterBtnSkinpacks.classList.remove("active");

    currentFilter = "adventuremap";
    refresh();
});

filterBtnMashups.addEventListener("click", function() {
    filterBtnAll.classList.remove("active");
    filterBtnSurvivalSpawns.classList.remove("active");
    filterBtnAdventureMaps.classList.remove("active");
    filterBtnMashups.classList.add("active");
    filterBtnSkinpacks.classList.remove("active");

    currentFilter = "mashup";
    refresh();
});

filterBtnSkinpacks.addEventListener("click", function() {
    filterBtnAll.classList.remove("active");
    filterBtnSurvivalSpawns.classList.remove("active");
    filterBtnAdventureMaps.classList.remove("active");
    filterBtnMashups.classList.remove("active");
    filterBtnSkinpacks.classList.add("active");

    currentFilter = "skinpack";
    refresh();
});

function refresh() {
    console.log(currentFilter);

    let boxes = document.querySelectorAll(".box");

    boxes.forEach(function(item) {
        if(item.classList.contains(currentFilter)) {
            item.style.display="inline-block";
        } else {
            item.style.display="none";
        }
    });
}