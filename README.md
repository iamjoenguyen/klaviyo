# klaviyo
Sample exercises for Klaviyo


##General Questions:

1. What browser level of support will we need?
2. Are there any specific routes that we need to implement?
3. Is it ok to use jquery UI for the dragging functionality?
4. Is it mandatory that we nest an iframe into the screen?



##Initial Brainstorming Design:
###Model Design

* email = Collection of emailItems
* emailItem = Model
  * emailItem properties have:
    * position
    * type 
    * tbd

  * emailItem methods have:
    * moveTo ( integer )
      This will change the position property
    * tbd




Phase 2 would be to extend the emailItems for buttons/text/image/spacers