import { isClerkAPIResponseError } from "@clerk/nextjs";
import { z } from "zod";
import { unknownError } from "@/lib/constants";

export function getErrorMessage(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return errors.join("\n");
  } else if (err instanceof Error) {
    return err.message;
  } else if (isClerkAPIResponseError(err)) {
    return err.errors[0]?.longMessage ?? unknownError;
  } else {
    return unknownError;
  }
}