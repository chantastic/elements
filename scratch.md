## Library Approach
* Extension by composition
  - create new components
  - expose new functionality
  - map to lower-level components
* Extension by injection
  - as prop for baseline extension
* prop-to-modifier
  - predictable decomposition
  - `<ScaledText scale={5} />` => `<span class="text scaled-text scaled-text--scale_5"/>`
* Theme via CSS Custom Properties
* Improve understanding of standards (CSS)
* Improve understanding of Component composition models

## Questions
* should we strip out margins on headings?
* separate "size" and "scale" as distinct concepts
  * size = "fixed 8pt"
  * scale = "relative scale"
  