import { ExecOutput, getExecOutput } from '@sample/core';

export function lib1(): Promise<ExecOutput> {
  return getExecOutput('echo 1');
}
