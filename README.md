## Goal

- To have a separate access data layer independent from the service layer so if we wanted to change the ORM later we won't touch the service layer
- The service layer should not access the repository layer directly (via interfaces)
