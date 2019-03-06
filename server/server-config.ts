import {ServiceConfiguration} from "meteor/service-configuration";

Meteor.startup(() => {
    ServiceConfiguration.configurations.remove({
        service: "google"
    });

    ServiceConfiguration.configurations.upsert(
        {service: "google"},
        {
            $set: {
                /**
                 * TODO:
                 * Get you Google API key ;)
                 */
                clientId: "XXXX",
                secret: "YYYY"
            }
        }
    );
});
