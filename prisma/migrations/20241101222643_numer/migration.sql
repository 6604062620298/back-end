-- CreateTable
CREATE TABLE "numertable" (
    "id" SERIAL NOT NULL,
    "Solution" TEXT NOT NULL,
    "Equation" TEXT NOT NULL,
    "Result" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "numertable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integration" (
    "id" SERIAL NOT NULL,
    "Solution" TEXT NOT NULL,
    "Equation" TEXT NOT NULL,
    "a" TEXT NOT NULL,
    "b" TEXT NOT NULL,
    "n" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "integration_pkey" PRIMARY KEY ("id")
);
