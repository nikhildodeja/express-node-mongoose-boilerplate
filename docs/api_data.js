define({ "api": [
  {
    "type": "delete",
    "url": "/api/category/:id",
    "title": "Delete Category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Category Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/product/category/category.controller.js",
    "groupTitle": "Category",
    "name": "DeleteApiCategoryId"
  },
  {
    "type": "get",
    "url": "/api/category",
    "title": "Read Categories",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Categories",
            "optional": false,
            "field": "Category",
            "description": "<p>List of Category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Categroy.name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Category.parent</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Car\",\n  \"parent\": \"4777777\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/category/category.controller.js",
    "groupTitle": "Category",
    "name": "GetApiCategory"
  },
  {
    "type": "get",
    "url": "/api/category/:id",
    "title": "Read Category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Category Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent-categoryId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Car\",\n  \"parent\": \"4777777\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/category/category.controller.js",
    "groupTitle": "Category",
    "name": "GetApiCategoryId"
  },
  {
    "type": "post",
    "url": "/api/category",
    "title": "Create Category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>as Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>as optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\": \"Men\",\n    \"parent\": \"477777eeeee7777\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent-categoryId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Car\",\n  \"parent\": \"4777777\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/category/category.controller.js",
    "groupTitle": "Category",
    "name": "PostApiCategory"
  },
  {
    "type": "put",
    "url": "/api/category/:id",
    "title": "Update Category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Category Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>as Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>as optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\": \"Men\",\n    \"parent\": \"477777eeeee7777\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent-categoryId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Car\",\n  \"parent\": \"4777777\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/category/category.controller.js",
    "groupTitle": "Category",
    "name": "PutApiCategoryId"
  },
  {
    "type": "delete",
    "url": "/api/manufacturer/:id",
    "title": "Delete Manufacturer",
    "group": "Manufacturer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Manufacturer Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/product/manufacturer/manufacturer.controller.js",
    "groupTitle": "Manufacturer",
    "name": "DeleteApiManufacturerId"
  },
  {
    "type": "get",
    "url": "/api/manufacturer",
    "title": "Read Manufacturer",
    "group": "Manufacturer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Manufactureres",
            "optional": false,
            "field": "Manufacturer",
            "description": "<p>List of Manufacturer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Manufacturer.name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Adidas\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/manufacturer/manufacturer.controller.js",
    "groupTitle": "Manufacturer",
    "name": "GetApiManufacturer"
  },
  {
    "type": "get",
    "url": "/api/manufacturer/:id",
    "title": "Read Manufacturer",
    "group": "Manufacturer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Manufacturer Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Manufacturer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Manufacturer Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Adidas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/manufacturer/manufacturer.controller.js",
    "groupTitle": "Manufacturer",
    "name": "GetApiManufacturerId"
  },
  {
    "type": "post",
    "url": "/api/manufacturer",
    "title": "Create Manufacturer",
    "group": "Manufacturer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>as Manufacturer name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\": \"Adidas\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Manufacturer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Manufacturer Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Adidas\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/manufacturer/manufacturer.controller.js",
    "groupTitle": "Manufacturer",
    "name": "PostApiManufacturer"
  },
  {
    "type": "put",
    "url": "/api/manufacturer/:id",
    "title": "Update Manufacturer",
    "group": "Manufacturer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Manufacturer Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>as Manufacturer name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\": \"Adidas\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Manufacturer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Manufacturer Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"4554444444ddeee\",\n  \"name\": \"Puma\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/manufacturer/manufacturer.controller.js",
    "groupTitle": "Manufacturer",
    "name": "PutApiManufacturerId"
  },
  {
    "type": "delete",
    "url": "/api/product/:id",
    "title": "Delete Product",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Product Id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/product/product/product.controller.js",
    "groupTitle": "Product",
    "name": "DeleteApiProductId"
  },
  {
    "type": "get",
    "url": "/api/product",
    "title": "Read Products",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Products",
            "optional": false,
            "field": "Product",
            "description": "<p>List of Category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Product Manufacturer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product Category id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": \"577eebbbb777eee\",\n  \"name\": \"Shoues Blue\",\n  \"sku\": \"SAdBL\",\n  \"manufacturer\": \"5e05b92a61299f3ad05d224d\",\n  \"category\": \"5e049f7aca2871395c43207c\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/product/product.controller.js",
    "groupTitle": "Product",
    "name": "GetApiProduct"
  },
  {
    "type": "get",
    "url": "/api/product/:id",
    "title": "Read Product",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Product Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Product Manufacturer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product Category id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"577eebbbb777eee\",\n  \"name\": \"Shoues Blue\",\n  \"sku\": \"SAdBL\",\n  \"manufacturer\": \"5e05b92a61299f3ad05d224d\",\n  \"category\": \"5e049f7aca2871395c43207c\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/product/product.controller.js",
    "groupTitle": "Product",
    "name": "GetApiProductId"
  },
  {
    "type": "post",
    "url": "/api/product",
    "title": "Create Product",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>as Product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sku",
            "description": "<p>as optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\": \"Shoues Blue\",\n    \"sku\": \"SAdBL\",\n    \"manufacturer\": \"5e05b92a61299f3ad05d224d\",\n    \"category\": \"5e049f7aca2871395c43207c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Product Manufacturer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product Category id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"577eebbbb777eee\",\n  \"name\": \"Shoues Blue\",\n  \"sku\": \"SAdBL\",\n  \"manufacturer\": \"5e05b92a61299f3ad05d224d\",\n  \"category\": \"5e049f7aca2871395c43207c\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/product/product.controller.js",
    "groupTitle": "Product",
    "name": "PostApiProduct"
  },
  {
    "type": "put",
    "url": "/api/product/:id",
    "title": "Update Product",
    "group": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {{token}}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>as Product Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>as Product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sku",
            "description": "<p>as Product sku</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>as Product manufacturer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>as Product category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\": \"Shoues Blue\",\n    \"sku\": \"SAdBL\",\n    \"manufacturer\": \"5e05b92a61299f3ad05d224d\",\n    \"category\": \"5e049f7aca2871395c43207c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Product Manufacturer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Product Category id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"577eebbbb777eee\",\n  \"name\": \"Shoues Blue\",\n  \"sku\": \"SAdBL\",\n  \"manufacturer\": \"5e05b92a61299f3ad05d224d\",\n  \"category\": \"5e049f7aca2871395c43207c\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/product/product/product.controller.js",
    "groupTitle": "Product",
    "name": "PutApiProductId"
  }
] });
