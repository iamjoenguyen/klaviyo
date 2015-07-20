# klaviyo
Sample exercises for Klaviyo


##General Questions:

1. what browser level of support will we need?
2. Are there any specific routes that we need to implement?
3. Is it ok to use jquery UI for the dragging?



##Initial Brainstorming Design:
###Model Design

* email = Collection of emailItems
* emailItem = Model
  * emailItem properties have:
    * position
    * type 

  * emailItem methods have:
    * moveTo ( integer )
      This will change the position property




Phase 2 would be to extend the emailItems for buttons/text/image/spacers