import SendEmailWhenProductIsCreatedHandler from "../product/handle/sendEmailWhenProductIsCreated.handler";
import ProductCreateEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispetcher";

describe('Domine events tests', () => {
  it('should register an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined(); 
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1); 
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
   });

   it('should unregister an event handler', () => { 
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    
    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();

    eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
   })

   it('should unregister all event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

    eventDispatcher.unregisterAll();
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeUndefined();
    })

    it('should notify all event event', () => {
  
      const eventDispatcher = new EventDispatcher();
      const eventHandler = new SendEmailWhenProductIsCreatedHandler();
      const spyEventHandler = jest.spyOn(eventHandler, 'handle');

      eventDispatcher.register("ProductCreateEvent", eventHandler);
      console.log(eventDispatcher.getEventHandlers["ProductCreateEvent"])
      expect(eventDispatcher.getEventHandlers["ProductCreateEvent"][0]).toMatchObject(eventHandler);

      const productCreateEvent = new ProductCreateEvent({
        name: 'Product 1', 
        description: 'Product 1 description', 
        price: 10
      });

      eventDispatcher.notify(productCreateEvent);

      expect(spyEventHandler).toHaveBeenCalled();  
    })
 })
 