/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["Coffee"]: AliasType<{
	id?:true,
	name?:true,
	price?:true,
	imageUrl?:true,
	description?:true
		__typename?: true
}>;
	["CoffeeChanged"]: AliasType<{
	mutationType?:true,
	id?:true
		__typename?: true
}>;
	["CreateCoffeeInput"]: {
	name:string,
	price:number,
	imageUrl:ValueTypes["Url"],
	description?:string
};
	["MutationRoot"]: AliasType<{
createCoffee?: [{	input:ValueTypes["CreateCoffeeInput"]},ValueTypes["Coffee"]],
updateCoffee?: [{	input:ValueTypes["UpdateCoffeeInput"]},ValueTypes["Coffee"]],
deleteCoffee?: [{	id:string},ValueTypes["Coffee"]]
		__typename?: true
}>;
	["MutationType"]:MutationType;
	["QueryRoot"]: AliasType<{
	coffees?:ValueTypes["Coffee"],
coffee?: [{	id:string},ValueTypes["Coffee"]]
		__typename?: true
}>;
	["SubscriptionRoot"]: AliasType<{
coffees?: [{	mutationType?:ValueTypes["MutationType"]},ValueTypes["CoffeeChanged"]]
		__typename?: true
}>;
	["UpdateCoffeeInput"]: {
	id:string,
	name?:string,
	price?:number,
	imageUrl?:ValueTypes["Url"],
	description?:string
};
	["Url"]:unknown
  }

export type PartialObjects = {
    ["Coffee"]: {
		__typename?: "Coffee";
			id?:string,
			name?:string,
			price?:number,
			imageUrl?:string,
			description?:string
	},
	["CoffeeChanged"]: {
		__typename?: "CoffeeChanged";
			mutationType?:PartialObjects["MutationType"],
			id?:string
	},
	["CreateCoffeeInput"]: {
	name:string,
	price:number,
	imageUrl:PartialObjects["Url"],
	description?:string
},
	["MutationRoot"]: {
		__typename?: "MutationRoot";
			createCoffee?:PartialObjects["Coffee"],
			updateCoffee?:PartialObjects["Coffee"],
			deleteCoffee?:PartialObjects["Coffee"]
	},
	["MutationType"]:MutationType,
	["QueryRoot"]: {
		__typename?: "QueryRoot";
			coffees?:PartialObjects["Coffee"][],
			coffee?:PartialObjects["Coffee"]
	},
	["SubscriptionRoot"]: {
		__typename?: "SubscriptionRoot";
			coffees?:PartialObjects["CoffeeChanged"]
	},
	["UpdateCoffeeInput"]: {
	id:string,
	name?:string,
	price?:number,
	imageUrl?:PartialObjects["Url"],
	description?:string
},
	["Url"]:any
  }

// Directs the executor to query only when the field exists.



export type Coffee = {
	__typename?: "Coffee",
	id:string,
	name:string,
	price:number,
	imageUrl:string,
	description:string
}

export type CoffeeChanged = {
	__typename?: "CoffeeChanged",
	mutationType:MutationType,
	id:string
}

export type CreateCoffeeInput = {
		name:string,
	price:number,
	imageUrl:Url,
	description?:string
}

export type MutationRoot = {
	__typename?: "MutationRoot",
	createCoffee:Coffee,
	updateCoffee:Coffee,
	deleteCoffee:Coffee
}

export enum MutationType {
	CREATED = "CREATED",
	UPDATED = "UPDATED",
	DELETED = "DELETED"
}

export type QueryRoot = {
	__typename?: "QueryRoot",
	coffees:Coffee[],
	coffee:Coffee
}

export type SubscriptionRoot = {
	__typename?: "SubscriptionRoot",
	coffees:CoffeeChanged
}

export type UpdateCoffeeInput = {
		id:string,
	name?:string,
	price?:number,
	imageUrl?:Url,
	description?:string
}

export type Url = any

export const AllTypesProps: Record<string,any> = {
	CreateCoffeeInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		price:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:true
		},
		imageUrl:{
			type:"Url",
			array:false,
			arrayRequired:false,
			required:true
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MutationRoot:{
		createCoffee:{
			input:{
				type:"CreateCoffeeInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateCoffee:{
			input:{
				type:"UpdateCoffeeInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteCoffee:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	MutationType: "enum",
	QueryRoot:{
		coffee:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	SubscriptionRoot:{
		coffees:{
			mutationType:{
				type:"MutationType",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UpdateCoffeeInput:{
		id:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		price:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		imageUrl:{
			type:"Url",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Url: "String"
}

export const ReturnTypes: Record<string,any> = {
	Coffee:{
		id:"String",
		name:"String",
		price:"Float",
		imageUrl:"String",
		description:"String"
	},
	CoffeeChanged:{
		mutationType:"MutationType",
		id:"ID"
	},
	MutationRoot:{
		createCoffee:"Coffee",
		updateCoffee:"Coffee",
		deleteCoffee:"Coffee"
	},
	QueryRoot:{
		coffees:"Coffee",
		coffee:"Coffee"
	},
	SubscriptionRoot:{
		coffees:"CoffeeChanged"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'QueryRoot')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["QueryRoot"],QueryRoot>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'MutationRoot')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["MutationRoot"],MutationRoot>,
subscription: ((o: any, variables) =>
    fullChainConstruct(fn)('subscription', 'SubscriptionRoot')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["SubscriptionRoot"],SubscriptionRoot>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'QueryRoot')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["QueryRoot"],QueryRoot>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'MutationRoot')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["MutationRoot"],MutationRoot>,
subscription: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('subscription', 'SubscriptionRoot')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["SubscriptionRoot"],SubscriptionRoot>
});
export const Zeus = {
  query: (o:ValueTypes["QueryRoot"]) => queryConstruct('query', 'QueryRoot')(o),
mutation: (o:ValueTypes["MutationRoot"]) => queryConstruct('mutation', 'MutationRoot')(o),
subscription: (o:ValueTypes["SubscriptionRoot"]) => queryConstruct('subscription', 'SubscriptionRoot')(o)
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["QueryRoot"],
  QueryRoot
>,
mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["MutationRoot"],
  MutationRoot
>,
subscription: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["SubscriptionRoot"],
  SubscriptionRoot
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["QueryRoot"]>(),
mutation: ZeusSelect<ValueTypes["MutationRoot"]>(),
subscription: ZeusSelect<ValueTypes["SubscriptionRoot"]>()
};
  