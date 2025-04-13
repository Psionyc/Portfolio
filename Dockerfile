# Stage 1: Build Stage
FROM node:22.14.0-alpine AS build

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

COPY . .

RUN npm install -g corepack@latest
RUN corepack enable

RUN pnpm install --frozen-lockfile --prod

RUN pnpm run build

# Stage 2: Final Stage
FROM node:22.14.0-alpine AS final

WORKDIR /app

COPY --from=build /app/.output .output

RUN apk update && apk add --no-cache curl


EXPOSE 3000

CMD ["sh", "-c", "export NUXT_PRIVATE_RESEND_API_KEY=$NUXT_PRIVATE_RESEND_API_KEY && \
export NUXT_PRIVATE_EMAIL=\"$NUXT_PRIVATE_EMAIL\" && \
node .output/server/index.mjs"]

