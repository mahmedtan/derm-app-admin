// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import youtube from "./youtube";
import name from "./name";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import serviceType from "./serviceType";
import service from "./service";
import comment from "./comment";
import form from "./form";
import procedure from "./procedure";
import consultation from "./consultation";
import dateAvailable from "./dateAvailable";
import timeAvailable from "./timeAvailable";
import user from "./patient";
import extra from "./extra";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    serviceType,
    service,
    comment,
    form,
    procedure,
    consultation,
    dateAvailable,
    timeAvailable,
    user,
    extra,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    youtube,
    name,
  ]),
});
